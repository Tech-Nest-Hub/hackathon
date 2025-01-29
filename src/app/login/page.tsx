import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"


export default function SignUp() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 flex-col p-10 bg-gradient-to-b from-green-950 to-green-900">
        <div className="flex items-center gap-2 text-white">
          <Image src="/placeholder.svg" alt="logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-xl font-semibold"> Techspire food system
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-4">Start growing your business quickly</h1>
          <p className="text-gray-300 mb-8">
            Create an account and get access to all features for 30-days, No credit card required.
          </p>

          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Avatar key={i} className="border-2 border-green-900 w-8 h-8">
                  <AvatarImage src={`/placeholder.svg?${i}`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="ml-4 text-sm text-gray-300">Join 5,000+ users</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center border border-slate-900 p-8">
        <div className="w-full max-w-md space-y-8 ">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
            <p className="text-muted-foreground">Login to access you account.</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <Input id="password" placeholder="Password" type="password" autoComplete="current-password" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

