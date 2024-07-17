import { ExperienceItem } from "../components/index.components";
import { ExperienceData } from "../../types/index.types";

// Fetch Data Hook
import useFetchData from "../hooks/useFetchData";

export const Experience = () => {
    const [data, loading, error] = useFetchData<ExperienceData>(
        "/data/workData.json"
    );

    const workData = data ? data.workData : [];

    return (
        <section
            id="experience"
            className="flex justify-start items-center min-h-screen h-auto bg-slate-200 min-w-[320px] p-4"
        >
            <div className="dynamic-padding pt-20 lg:pt-28">
                <div className="">
                    <h1 className="text-3xl font-bold">My Experience</h1>
                    {error && (
                        <div className="section--error">Error: {error}</div>
                    )}
                    {loading && <div>Loading...</div>}
                    {workData.length > 0 && (
                        <ExperienceItem workData={workData} />
                    )}
                </div>
            </div>
        </section>
    );
};
