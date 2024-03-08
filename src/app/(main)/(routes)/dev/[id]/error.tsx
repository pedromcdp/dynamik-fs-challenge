"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Ocorreu um erro!</h2>
      <h3>{JSON.stringify(error)}</h3>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
}
