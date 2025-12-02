// src/pages/Team.jsx
import { Link } from "react-router-dom";
import HeroCommon from "../components/HeroCommon";
import { teamMembers } from "../data/teamData";

import FacebookIcon from "../assets/Facebook_green.svg";
import InstagramIcon from "../assets/Instagram_green.svg";
import LinkedInIcon from "../assets/LinkedIn_green.svg";
import XIcon from "../assets/X_green.svg";

function Team() {
  return (
    <div className="bg-[#F4F8F2] min-h-screen">
      <HeroCommon title="Команда" />

      <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
            >
              {/* Фото / плейсхолдер */}
              <div className="relative w-full h-70 bg-slate-200">
                {member.photo && (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                )}

                {member.socials &&
                  (member.socials.facebook ||
                    member.socials.instagram ||
                    member.socials.linkedin ||
                    member.socials.x) && (
                    <div className="absolute top-1/2 -translate-y-1/2 right-3 bg-lightGreen rounded-full flex flex-col items-center justify-center gap-2 px-1 py-2 shadow-md">
                      {member.socials.x && (
                        <a
                          href={member.socials.x}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={XIcon} alt="X" className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials.facebook && (
                        <a
                          href={member.socials.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={FacebookIcon}
                            alt="Facebook"
                            className="w-3.5 h-3.5"
                          />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={InstagramIcon}
                            alt="Instagram"
                            className="w-3.5 h-3.5"
                          />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={LinkedInIcon}
                            alt="LinkedIn"
                            className="w-3.5 h-3.5"
                          />
                        </a>
                      )}
                    </div>
                  )}
              </div>

              {/* Ім’я + роль + кнопка детальніше */}
              <div className="px-5 py-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 truncate">
                    {member.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                    {member.role}
                  </p>
                </div>

                <Link
                  to={`/team/${member.id}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-lightGreen text-lightGreen hover:bg-lightGreen hover:text-white transition text-xs"
                  aria-label={`Детальніше про ${member.name}`}
                >
                  ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;
