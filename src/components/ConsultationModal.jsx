// src/components/ConsultationModal.jsx
import { useState } from "react";

function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  if (!isOpen) return null; // нічого не рендеримо, якщо модалка закрита

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // тут поки що просто виводимо в консоль
    console.log("Заявка на консультацію:", {
      ...formData,
      createdAt: new Date().toISOString(),
    });

    // можна очистити форму
    setFormData({
      name: "",
      email: "",
      country: "",
      message: "",
    });

    // і закрити модалку
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/50">
      <div className="w-11/12 max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-7 relative">
        {/* Хрестик */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-2 -top-2 w-7 h-7 rounded-full bg-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-300"
        >
          ×
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-darkGreen mb-3">
          Запис на консультацію
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mb-4">
          Заповніть форму, і ми зв’яжемося з вами, щоб узгодити час
          консультації.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-600 mb-1">
              Ваше ім’я
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-lightGreen"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-lightGreen"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-600 mb-1">
              Країна / напрямок, який вас цікавить
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Наприклад: Німеччина, Канада…"
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-lightGreen"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-600 mb-1">
              Коротко опишіть свою ситуацію
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-lightGreen resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-lightGreen text-white text-sm font-semibold hover:bg-green-600 transition"
          >
            Надіслати заявку
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultationModal;
