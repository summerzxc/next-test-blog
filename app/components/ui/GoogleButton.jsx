import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

function GoogleButton() {
  const handleSignIn = async () => {
    const result = await signIn("google", { callbackUrl: "/" });
    if (result?.error) {
      console.error("Sign-in error:", result.error);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="btn btn-outline btn-neutral w-full mt-2"
    >
      Google でサインインする <FcGoogle />
    </button>
  );
}

export default GoogleButton;
