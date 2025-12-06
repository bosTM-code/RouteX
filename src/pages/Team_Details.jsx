import { useParams, Link } from "react-router-dom";
import HeroCommon from "../components/HeroCommon";
import { getTeamMemberById } from "../data/teamData";

function ProgressBar({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-slate-700 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-lightGreen" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function TeamDetails() {
  const { id } = useParams();
  const member = getTeamMemberById(id);

  if (!member) {
    return (
      <div className="bg-[#F4F8F2] min-h-screen">
        <HeroCommon title="Профіль не знайдено" />
        <div className="w-11/12 max-w-4xl mx-auto py-16">
          <p className="mb-4">
            На жаль, спеціаліста з таким посиланням не знайдено.
          </p>
          <Link
            to="/team"
            className="text-lightGreen font-semibold underline text-sm"
          >
            ← Повернутися до команди
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F8F2] min-h-screen">
      <HeroCommon
        title="Профіль учасника команди"
        breadcrumb={`Головна / Команда`}
      />

      <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16 space-y-10">
        {/* Верхній блок: фото + основна інформація */}
        <div className="grid gap-8 lg:grid-cols-[260px,minmax(0,1fr)] items-start">
          <div className="w-full h-70 sm:h-75 bg-slate-200 rounded-3xl overflow-hidden">
            {member.photo && (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-darkGreen mb-2">
              {member.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-4">
              {member.role}
            </p>

            {member.bio?.length && (
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                {member.bio[0]}
              </p>
            )}

            <dl className="space-y-2 text-sm sm:text-base text-slate-700">
              <div>
                <dt className="font-semibold">Основна відповідальність:</dt>
                <dd>{member.responsibility}</dd>
              </div>
              <div>
                <dt className="font-semibold">Досвід:</dt>
                <dd>{member.experience}</dd>
              </div>
              <div>
                <dt className="font-semibold">Email:</dt>
                <dd>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-lightGreen hover:underline"
                  >
                    {member.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Телефон:</dt>
                <dd>
                  <a
                    href={`tel:${member.phone}`}
                    className="text-lightGreen hover:underline"
                  >
                    {member.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Нижній блок: досвід + скіли + форма */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
              Особистий досвід
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-slate-700 mb-6">
              {member.bio?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {member.skills?.length > 0 && (
              <>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                  Професійні навички
                </h3>
                <div className="max-w-xl">
                  {member.skills.map((s) => (
                    <ProgressBar
                      key={s.label}
                      label={s.label}
                      value={s.value}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Права колонка – проста контактна форма */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-6 sm:px-7 sm:py-7">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
              Написати консультанту
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-4">
              Коротко опишіть свою ситуацію, і ми передамо повідомлення
              безпосередньо {member.name}.
            </p>

            <form className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ваше імʼя"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-lightGreen"
                />
                <input
                  type="email"
                  placeholder="Ваш Email"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-lightGreen"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Ваше повідомлення"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-lightGreen resize-none"
              />
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input type="checkbox" className="rounded border-slate-300" />
                <span>Зберегти моє імʼя та email для наступних звернень</span>
              </label>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-lightGreen text-white text-sm font-semibold hover:bg-green-600 transition"
              >
                Надіслати
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamDetails;
