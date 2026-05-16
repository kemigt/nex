import React from "react";

export default function App() {
  return (
    <div className="font-sans text-gray-800">

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">NEX SHOP</h1>
        <p className="text-lg mb-6">
          Tu tienda online en Guatemala. Compra fácil y recibe en tu casa 🚚
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
          Próximamente
        </button>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">¿Por qué elegirnos?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-4 shadow rounded-lg">
            🚚 <h3 className="font-bold">Envíos a todo Guatemala</h3>
            <p>Recibe tus productos en la puerta de tu casa.</p>
          </div>
          <div className="p-4 shadow rounded-lg">
            ⚡ <h3 className="font-bold">Compra fácil</h3>
            <p>Interfaz rápida y sencilla.</p>
          </div>
          <div className="p-4 shadow rounded-lg">
            🔒 <h3 className="font-bold">Pagos seguros</h3>
            <p>Tu información siempre protegida.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">¿Cómo funciona?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>🛒 <p>Explora productos</p></div>
          <div>💳 <p>Realiza tu compra</p></div>
          <div>📦 <p>Recibe en casa</p></div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Muy pronto disponible en toda Guatemala 🇬🇹
        </h2>
        <p className="mb-6">Prepárate para comprar desde casa con NEX SHOP</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Notificarme
        </button>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 NEX SHOP</p>
      </footer>

    </div>
  );
}