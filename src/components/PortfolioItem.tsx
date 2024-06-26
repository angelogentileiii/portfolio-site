import React from "react";
import { PortfolioData, Project } from "../types";

const PortfolioItem: React.FC<PortfolioData> = ({ portfolioData }) => {
    const onImageClick = (url: string): void => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const imageStyle = {
        width: "150px",
        height: "150px",
        borderRadius: "10px",
        borderColor: "black",
        borderStyle: "solid",
        margin: "10px",
    };

    return (
        <div>
            <div>
                {portfolioData.map((project: Project, projIndex: number) => {
                    const { title, description, image, url } = project;

                    return (
                        <div className="project--item" key={projIndex}>
                            <img
                                className="project--image"
                                src={image}
                                alt="Crew Portal Logo - Where Industry Leaders Connect with the Industry's Makers"
                                onClick={() => onImageClick(url)}
                                style={imageStyle}
                            />
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PortfolioItem;
