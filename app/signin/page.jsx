'use client';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <>
      <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;' w={{ base: "100%", md: "70%", lg: "40%" }} m='auto' mt='100px' borderRadius='20px' p='10px 0 10px 0'>
        <Box textAlign='center' >
          <Heading as='h3' size='lg'>
            Sign in to your account
          </Heading>
        </Box>

        <Box >
          <Box>
            <Box w='90%' m='auto' mt='50px'>
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

            <Box w='90%' m='auto' mt='50px'>
              <Box>
                <label htmlFor="password">
                  Password
                </label>
              </Box>
              <Box>
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

            <Box w='90%' m='auto' mt='50px'>
              <button
                onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/news' })}
                disabled={!email || !password}
                className='button'
              >
                Sign in
              </button>
            </Box>
          </Box>
          <Text textAlign='center' mt='50px'>
            Not a member?{' '}
            <Button onClick={() => router.push('signup')} >
              Sign Up
            </Button>
          </Text>
        </Box>
      </Box>
    </>
  )
}