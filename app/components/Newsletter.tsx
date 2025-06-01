import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-3">Newsletter</h3>
      <p className="text-blue-100 mb-4 text-sm">
        Recibe los últimos artículos directamente en tu email
      </p>
      <div className="space-y-3">
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
        />
        <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
          Suscribirse
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
