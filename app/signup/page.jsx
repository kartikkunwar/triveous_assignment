'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../firebase';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const router = useRouter();

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password);
        router.push('signin')
    };

    return (
        <>
            <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;' w={{ base: "100%", md: "70%", lg: "40%" }} m='auto' mt='100px' borderRadius='20px' p='30px 0 30px 0' >
                <Box textAlign='center'>
                    <Heading as='h3' size='lg'>
                        Sign up
                    </Heading>
                </Box>
                <Box mt='50px'>
                    <Box  >
                        <Box w='90%' m='auto'>
                            <label htmlFor="email" >
                                Email address
                            </label>
                            <Box >
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Box>
                        </Box>

                        <Box w='90%' m='auto' mt='20px'>
                            <Box >
                                <label htmlFor="password" >
                                    Password
                                </label>
                            </Box>
                            <Box className="mt-2">
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Box>
                        </Box>
                        <Box w='90%' m='auto' mt='20px'>
                            <Box >
                                <label htmlFor="password" >
                                    Password Again
                                </label>
                            </Box>
                            <Box className="mt-2">
                                <Input
                                    id="passwordAgain"
                                    name="passwordAgain"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPasswordAgain(e.target.value)}
                                    required
                                />
                            </Box>
                        </Box>

                        <Box w='90%' m='auto' mt='20px'>
                            <button
                                disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                                onClick={() => signup()}
                                className='button'
                            >
                                Sign Up
                            </button>
                        </Box>
                        <Text textAlign='center' mt='50px'>
                            Already signed up?{' '}
                            <Button onClick={() => router.push('signin')} >
                                Sign In
                            </Button>
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}