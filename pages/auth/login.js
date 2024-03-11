import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const { callbackUrl } = useRouter().query;

  return (
    <main className=" min-h-screen bg-[url('https://images.ctfassets.net/9lvru9ro1ti1/3V0P5hFofZqSM0vefdl8ae/b5f588662f12486f93cb5edd40ef5e67/sandiego-drone-shot-alex-garcia.jpg')] bg-cover">
      <div className="flex min-h-screen items-center justify-center bg-white/30 backdrop-blur-sm">
        {Object.values(providers).map((provider) => (
          <div
            className="w-fit rounded-xl bg-white drop-shadow-md"
            key={provider.name}
          >
            <div className="rounded-t-xl bg-neon-orange-500 py-2">
              <img
                src="https://images.ctfassets.net/9lvru9ro1ti1/5eDCWWALWZNRJcPH1f652F/5f75f3f20ca47fb399ec247d0cd19f80/IFG-LOGO-FULL-WHITE.png"
                alt="Full IFG Logo in Color"
                className="mx-auto w-1/3"
              />
              <h1 className="text-center text-xl font-semibold text-white">
                Representative Portal
              </h1>
            </div>
            <div className="px-3 py-5">
              <p className="mx-auto my-5 w-fit text-sm text-gray-500">
                Login with your IFG affiliated account
              </p>
              <button
                className="mx-auto flex items-center gap-1 rounded bg-gray-100 px-3 py-2 font-bold text-gray-600 hover:bg-gray-300 hover:text-gray-500"
                onClick={() =>
                  signIn(
                    provider.id,
                    {
                      callbackUrl: callbackUrl,
                    },
                    { prompt: "login" },
                  )
                }
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/archive/2/25/20160620080155%21Microsoft_icon.svg"
                  className="h-5 w-5"
                />
                Sign in with Microsoft
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
