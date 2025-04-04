"use client";
import { useEffect, useState } from 'react';

export default function VerifyPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyUser = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (!token) {
        setMessage('Invalid verification link.');
        return;
      }

      const res = await fetch(`/api/auth/verify?token=${token}`);
      const data = await res.json();

      if (res.ok) {
        setMessage('Your account has been verified successfully.');
      } else {
        setMessage(data.error || 'Verification failed.');
      }
    };

    verifyUser();
  }, []);

  return <div>{message}</div>;
}
 