import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClerkLoading, SignedOut, SignInButton,SignUpButton , ClerkLoaded, SignedIn} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative flex items-center justify-center">
    {/* <section className="max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2"> */}
        <div className="relative items-center w-full py-12 lg:py-20">
          <div className="text-center">
            <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
            The Ultimate Tool for Constitutional Literacy
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-none bg-gradient-moving bg-clip-text text-transparent animation-gradient-move">
            Learn the Constitution in
            <span className="block bg-gradient-moving bg-clip-text text-transparent animation-gradient-move">No Time!</span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-muted-foreground tracking-tighter">
            Understanding the Constitution can be complex and overwhelming. We simplify the process, making it easy for you to grasp key concepts in just minutes.
            </p>
            <div className="flex items-center gap-x-5 w-full justify-center mt-5 ">
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <Link href="/learn">
                    <Button size='lg' variant="ghost" className="">Continue Learning</Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton 
                mode="modal" 
                forceRedirectUrl="/learn" 
                signUpForceRedirectUrl="/learn"
                >
                    <Button size='lg' variant="ghost">
                    log in
                    </Button>
                </SignInButton>
                <SignUpButton 
                mode="modal" 
                forceRedirectUrl="/learn" 
                signInForceRedirectUrl="/learn"
                >
                    <Button size='lg' variant="ghost">
                    Sign up
                    </Button>
                </SignUpButton>
              </SignedOut>
            </ClerkLoaded>
            {/* <SignInButton 
            mode="modal" 
            forceRedirectUrl="/learn" 
            signUpForceRedirectUrl="/learn"
            >
                <Button size='lg' variant="ghost">
                Sign in
                </Button>
            </SignInButton>
            <SignUpButton 
            mode="modal" 
            forceRedirectUrl="/learn" 
            signInForceRedirectUrl="/learn"
            >
                <Button size='lg' variant="ghost">
                Try for free
                </Button>
            </SignUpButton> */}
            </div>
          </div>

          <div className="relative items-center w-full py-12 mx-auto mt-12">
            <svg
              className="absolute -mt-24 blur-3xl"
              fill="none"
              viewBox="0 0 400 400"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path
                    d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                    fill="#03FFE0"
                  ></path>
                  <path
                    d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                    fill="#7C87F8"
                  ></path>
                  <path
                    d="M320 400H400V78.75L106.2 134.75L320 400Z"
                    fill="#4C65E4"
                  ></path>
                  <path
                    d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                    fill="#043AFF"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="720.666"
                  id="filter0_f_10_20"
                  width="720.666"
                  x="-160.333"
                  y="-160.333"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_10_20"
                    stdDeviation="80.1666"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>

            {/* <Image
              src="/1.jpeg"
              alt="Hero image"
              priority
              width={425}
              height={425}
              className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
            /> */}
          </div>
        </div>
      </section>
  
  );
}
//  <div className="max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
  //   <div className="relative w-[240px] h-[240px] lg:w-[424px] mb-8 lg:mb">
  //     <Image src='/3.jpeg' alt='Home Page Image' fill/>
  //   </div>
  //  </div>