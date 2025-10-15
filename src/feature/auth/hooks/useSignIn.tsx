import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const { setToken } = useAuthStore();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "demo@gmail.com",
      password: "password",
    },
  });

  const handleSignIn = useMutation({
    mutationFn: (data: z.infer<typeof formSchema>) =>
      loginUser({ email: data.email, password: data.password }),
    onSuccess: (res) => {
      setToken(res?.token);
      navigate("/quiz");
    },
    onError: (error) => {
      form.setError("root", {
        message: "Invalid username or password",
        type: "manual",
      });
      console.error("Login failed:", error);
    },
  });
  return { form, handleSignIn };
};

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const loginUser = async (body: { email: string; password: string }) => {
  const response = await fetch(import.meta.env.VITE_AUTH_API + "dot-intern", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to login");

  const data = await response.json();
  return data.data;
};
