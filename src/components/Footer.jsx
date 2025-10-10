import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col justify-center items-center text-center">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600">
            Zohaib Aman Khan
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
