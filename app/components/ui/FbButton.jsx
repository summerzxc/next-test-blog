import { signIn } from "next-auth/react";
import { FaFacebook } from "react-icons/fa";


function FbButton() {
  const handleSignIn = async () => {
    const result = await signIn("facebook", { callbackUrl: "/" });
    if (result?.error) {
      console.error("Sign-in error:", result.error);
    }
  };
  return (
    <button
      onClick={handleSignIn}
      className="btn btn-outline btn-neutral w-full mt-2"
    >
      Facebook でサインインする <FaFacebook className="text-[#0967FF]"/>
    </button>
  );
}

export default FbButton
