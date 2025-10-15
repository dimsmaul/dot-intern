import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignIn } from "../hooks/useSignIn";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

const SignInForm = () => {
  const { form, handleSignIn } = useSignIn();

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-background p-4">
      <Card className="w-[400px]">
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((val) =>
                handleSignIn.mutateAsync(val)
              )}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  {form.formState.errors.root && (
                    <div className="text-red-500 text-sm">
                      {form.formState.errors.root.message}
                    </div>
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="text"
                            type="text"
                            placeholder="Email"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center">
                          <FormLabel>Password</FormLabel>
                        </div>
                        <FormControl>
                          <Input
                            id="password"
                            type="password"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInForm;
