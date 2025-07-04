'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Mail, Lock, Github, Cat } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCredentialsLogin = async () => {
        await signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted p-4">
            <Card className="w-full max-w-sm shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Entrar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="pl-10"
                                type="email"
                                autoComplete="email"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="pl-10"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <Button className="w-full" onClick={handleCredentialsLogin}>
                        Entrar com Email
                    </Button>
                    <div className="flex flex-col items-center gap-2">
                        <Button
                            variant="outline"
                            className="w-full flex items-center gap-2"
                            onClick={() => signIn('google')}
                        >
                            <Cat className="h-4 w-4" />
                            Google
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full flex items-center gap-2"
                            onClick={() => signIn('github')}
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
