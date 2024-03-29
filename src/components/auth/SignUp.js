import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history.push("/user")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }
    

    return (
        <CenteredContainer>
            <Card className="mt-3">
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" autoComplete="username" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" autoComplete="new-password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm" >
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} type="submit">Sign in</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/login' >Log in</Link>
            </div>
        </CenteredContainer>
    )
}
