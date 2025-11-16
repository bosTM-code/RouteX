function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-10 flex flex-col gap-6 shadow-sm hover:shadow-md transition">
      <div className="w-24 h-24 rounded-full bg-lightGreen flex items-center justify-center">
        {icon && (
          <img src={icon} alt={title} className="w-10 h-10 text-white" />
        )}
      </div>
      <h3 className="text-lg font-bold text-green-900">{title}</h3>
      <p className="text-gray-600 text-16px leading-relaxed">{text}</p>
    </div>
  );
}

export default FeatureCard;
