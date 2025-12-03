"use client"

import { apiClient } from "@/_lib/api"
import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type User = {
  id: string
  name: string
  email: string
  avatar?: string
  level?: number
  xp?: number
}

type UserContextType = {
  user: User | null
  // isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
  updateUser: (updates: Partial<User>) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for saved user in localStorage after mount
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Failed to parse saved user:", error)
        localStorage.removeItem("user")
      }
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    // loginSchema.parse({ email, password })
    // TODO: Replace with actual API call
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // const user = await apiClient.post<User>('/auth/login', {email, password})
    // Mock user data
    const user: User = {
      id: "1",
      name: "John Doe",
      email: email,
      avatar: undefined,
      level: 5,
      xp: 1250,
    }
    // persist session
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const signUp = async (name: string, email: string, password: string) => {

    // TODO: Replace with actual API call
    // Simulate API call
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    // // Mock user data
    // const mockUser: User = {
    //   id: "1",
    //   name: name,
    //   email: email,
    //   avatar: undefined,
    //   level: 1,
    //   xp: 0,
    // }
    const user = await apiClient.post<User>('/auth/register', { name, email, password })

    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const updateUser = (updates: Partial<User>) => {
    if (!user) return

    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser))
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
