import LoginForm from '@/features/auth/components/LoginForm';

export const metadata = {
  title: 'Login - Invictus Labs',
  description: 'Login to your Invictus Labs account',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-background">
      <LoginForm />
    </div>
  );
}
