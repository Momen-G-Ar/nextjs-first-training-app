import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <SignUp />
        </div>
    );
};

export default SignUpPage;
