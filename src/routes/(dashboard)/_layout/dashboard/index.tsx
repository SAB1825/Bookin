import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/auth-client'
import { getUserId } from '@/server/auth'
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, redirect, useRouter  } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/(dashboard)/_layout/dashboard/')({
  component: RouteComponent,
  beforeLoad : async () => {
    const userId = await getUserId();
    return {
      userId
    }
  },
  loader : async ({ context }) => {
    if(!context.userId) {
      throw redirect({ to : "/sign-in"})
    }
    return {
      userId : context.userId
    }
  }
})
function RouteComponent() {
  const router = useRouter()
  const { data: userId, error } = useQuery({
    queryKey: ['session'],
    queryFn: getUserId,
    refetchInterval: 5000,
  })

  useEffect(() => {
    if (!userId && userId !== undefined) {
      router.navigate({ to: '/sign-in' })
    }
  }, [userId, router])

  useEffect(() => {
    if (error) {
      router.navigate({ to: '/sign-in' })
    }
  }, [error, router])
  return <div>
    <p>userId : {userId}</p>
    <Button
      onClick={() => signOut({
        fetchOptions : {
          onSuccess : () => {
            router.navigate({ to : "/sign-in"})
          }
        }
      })}
    >
      Sign Out
    </Button>
  </div>
}
