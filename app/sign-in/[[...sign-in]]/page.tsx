import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <SignIn />
        </div>
    );
};
export default SignInPage;
