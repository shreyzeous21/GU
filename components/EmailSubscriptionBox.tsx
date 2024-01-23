import React from "react";

type Props = {};

const EmailSubscriptionBox = (props: Props) => {
  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access the form elements
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Use Fetch API to send a POST request to Formspree
      const response = await fetch("https://formspree.io/f/mdoqaaqa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Display a success message or redirect the user
        alert("Message sent successfully!");
        // You can also redirect the user to a different page if needed
      } else {
        // Handle the error
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="mx-auto max-w">
      <div className="border border-sky-200 rounded-lg p-6 my-4 dark:border-zinc-200 bg-blue-50 dark:bg-neutral-900">
        <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Subscribe to My Blog
        </p>
        <p className="my-2 text-zinc-800 dark:text-zinc-200">
          🏆 Be the first one to mail me.
        </p>

        <form
          onSubmit={subscribe}
          className="mt-4"
        >
          <label className="block mb-2">
            <span className="text-zinc-800 dark:text-zinc-200">Your email:</span>
            <input
              type="email"
              name="email"
              className="block w-full border border-zinc-300 dark:border-zinc-600 p-2 rounded"
            />
          </label>
          <label className="block mb-2">
            <span className="text-zinc-800 dark:text-zinc-200">Your message:</span>
            <textarea
              name="message"
              className="block w-full border border-zinc-300 dark:border-zinc-600 p-2 rounded"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSubscriptionBox;
