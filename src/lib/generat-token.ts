import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const VERIFICATION_TOKEN_EXPIRY = '24h' // 24 hours

export interface EmailVerificationPayload {
  userId: string
  email: string
  purpose: 'email-verification'
  iat?: number
  exp?: number
}

export function generateEmailVerificationToken(userId: string, email: string): string {
  const payload: EmailVerificationPayload = {
    userId,
    email,
    purpose: 'email-verification'
  }
  
  return jwt.sign(payload, JWT_SECRET, { 
    expiresIn: VERIFICATION_TOKEN_EXPIRY 
  })
}

// Verify token
export function verifyEmailToken(token: string): EmailVerificationPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as EmailVerificationPayload
    if (decoded.purpose !== 'email-verification') {
      return null
    }
    
    return decoded
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}
