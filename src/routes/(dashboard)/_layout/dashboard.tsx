import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/auth-client'
import { getUserId } from '@/server/auth'
import { createFileRoute, redirect, useRouter  } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/_layout/dashboard')({
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
  const {userId} = Route.useLoaderData();
  const router = useRouter()
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
