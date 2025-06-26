import { UserCircle } from "lucide-react";

export default function About() {
  return (
    <div className="section-padding pb-8 flex flex-col items-center justify-center min-h-[300px]">
      <h2 className="text-3xl font-bold text-primary mb-10 text-center">
        Meet the Founders
      </h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center">
        {/* Hansen Fan */}
        <div className="flex flex-col items-center bg-background-800 rounded-xl p-8 shadow-yellow-glow border border-border max-w-xs w-full">
          <UserCircle className="w-20 h-20 text-primary mb-4" />
          <h3 className="text-xl font-bold text-text mb-2">Hansen Fan</h3>
          <p className="text-text-muted text-center text-sm">
            Hansen is a passionate builder and engineer, dedicated to bringing
            AI innovation to the construction and engineering industries.
          </p>
        </div>
        {/* Jack Wang */}
        <div className="flex flex-col items-center bg-background-800 rounded-xl p-8 shadow-yellow-glow border border-border max-w-xs w-full">
          <UserCircle className="w-20 h-20 text-primary mb-4" />
          <h3 className="text-xl font-bold text-text mb-2">Jack Wang</h3>
          <p className="text-text-muted text-center text-sm">
            Jack is a technology leader with a vision for transforming how
            engineering teams leverage data and AI for smarter project delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
