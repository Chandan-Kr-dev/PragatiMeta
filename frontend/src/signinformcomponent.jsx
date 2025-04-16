import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, BadgeInfo } from 'lucide-react';
import { Button } from './components/ui/moving-border';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  userRole: z.enum(['student', 'teacher', 'principal']),
});

export default function RoleBasedUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
      {/* Shimmer background */}
      <div className="absolute inset-0 z-0 shimmer-bg" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 bg-white/10 border-2 border-silver text-white backdrop-blur-xl rounded-xl p-8 w-full shadow-2xl"
      >
        <h2 className="text-3xl mb-6 font-bold text-center text-silver">User Form</h2>

        <div className="mb-4">
          <label className="flex items-center gap-2 mb-1">
            <Mail size={18} />
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            required
            className="w-full p-2 rounded bg-gray-800/50 border border-silver text-white placeholder-gray-300"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 mb-1">
            <Lock size={18} />
            Password
          </label>
          <input
            type="password"
            {...register('password')}
            required
            className="w-full p-2 rounded bg-gray-800/50 border border-silver text-white placeholder-gray-300"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 mb-1">
            <BadgeInfo size={18} />
            User Role
          </label>
          <select
            {...register('userRole')}
            required
            defaultValue=""
            className="w-full p-2 rounded bg-gray-800/50 border border-silver text-white"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="principal">Principal</option>
          </select>
          {errors.userRole && <p className="text-red-400 text-sm">{errors.userRole.message}</p>}
        </div>

        <Button
          borderRadius="1.75rem"
          className="bg- dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold" 
        >
          Submit
        </Button>
      </form>

      {/* Shimmer animation style */}
      <style>
        {`
          .shimmer-bg {
            background: linear-gradient(
              -45deg,
              #0f0f0f 0%,
              #1a1a1a 25%,
              #2a2a2a 50%,
              #1a1a1a 75%,
              #0f0f0f 100%
            );
            background-size: 400% 400%;
            animation: shimmer 10s ease infinite;
            opacity: 0.2;
          }

          @keyframes shimmer {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}
