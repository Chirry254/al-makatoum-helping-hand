import React, { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(10);

  return (
    <main className="min-h-screen bg-white text-gray-900 p-4">
      <div className="max-w-2xl mx-auto py-10">
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="Al Makatoum Helping Hand Logo" className="w-32 h-32 mb-4" />
          <h1 className="text-3xl font-bold mb-2 text-center">Al Makatoum Helping Hand</h1>
          <p className="text-center text-lg">Support our mission with your generous donation.</p>
        </div>

        <div className="mb-6 border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Donate via Bitcoin</h2>
          <p className="mb-2 break-all">Wallet Address:</p>
          <div className="bg-gray-100 p-4 rounded mb-2 text-sm break-all">
            bc1qjrhku4yrvnrys7jq6532ar5a6m96k2mg8gwxx2
          </div>
          <img
            src="https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=bitcoin:bc1qjrhku4yrvnrys7jq6532ar5a6m96k2mg8gwxx2"
            alt="QR Code"
            className="mx-auto my-4"
          />
        </div>

        <div className="border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Donate via Card</h2>
          <form action="/api/checkout" method="POST">
            <label htmlFor="amount" className="block mb-2 font-medium">
              Donation Amount (USD)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mb-4 w-full p-2 border border-gray-300 rounded"
              min="1"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Donate with Card
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
