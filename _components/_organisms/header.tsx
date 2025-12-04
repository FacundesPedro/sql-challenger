"use client"

import { Logo } from "@/_components/_molecules/logo"
import { ThemeToggler } from "@/_components/_atoms/themeToggler"
import { UserMenu } from "@/_components/_molecules/userMenu"
import { User, useUser } from "@/_context/userContext"

interface HeaderProps {
    user: User
}

export function Header() {
    // const {user} = useUser()

    return (
        <header className="rounded-xl sticky top-2 mx-4 z-50 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Logo size="md"/>

                <div className="flex items-center gap-2">
                    <ThemeToggler />
                    <UserMenu />
                </div>
            </div>
        </header>
    )
}
