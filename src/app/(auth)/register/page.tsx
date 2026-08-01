import RegisterForm from '@/features/auth/components/RegisterForm';

export const metadata = {
  title: 'Register - Invictus Labs',
  description: 'Create an account on Invictus Labs',
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-background">
      <RegisterForm />
    </div>
  );
}
