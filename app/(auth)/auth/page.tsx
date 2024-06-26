"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInWithPassword, signUpWithPassword } from "@/lib/auth/actions";
import { Loader, LogIn } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export default function loginPage() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const query = useSearchParams().get("query");

  const signin = query === "signin";

  const handleSignIn = (formData: FormData) => {
    startTransition(() => {
      signInWithPassword(formData).catch(() => {
        setError("Invalid email or password");
      });
    });
  };

  const handleSignUp = (formData: FormData) => {
    startTransition(() => {
      signUpWithPassword(formData).catch(() => {
        setError("Une erreur a survenu, veillez reessayer");
      });
    });
  };

  const handleSubmit = (formData: FormData) => {
    signin ? handleSignIn(formData) : handleSignUp(formData);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2>{signin ? "Connexion" : "Inscription"}</h2>
      <fieldset className="w-full md:w-2/3 lg:w-1/2" disabled={isPending}>
        <form action={handleSubmit} className="grid grid-cols-1 w-full gap-4">
          <Input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="********"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button className="gap-2">
            {isPending ? <Loader className="animate-spin" /> : <LogIn />}
            {signin ? "Se Connecter" : "S'Inscrire"}
          </Button>
        </form>
      </fieldset>
      <Link
        className="mt-6 hover:underline"
        href={signin ? "/auth?query=signup" : "/auth?query=signin"}
      >
        {signin ? "Pas de compte" : "Vous avez un compte"}
      </Link>
    </div>
  );
}
