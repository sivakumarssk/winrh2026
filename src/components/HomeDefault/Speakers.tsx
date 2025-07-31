"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SpeakersMember {
  image: string;
  name: string;
  description: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  iconName: string;
  url: string;
  bgColor: string;
}

interface MainBannerProps {
  data: SpeakersMember[] | null | undefined;
}

const Speakers: React.FC<MainBannerProps> = ({data}) => {
  const speakersData = Array.isArray(data) ? data : [];

  return (
    <>
    <div className="speakers-area ptb-120 pb-0">
      <div className="container">
        <div className="section-title">
          <span>Listen to the Speakers</span>
          <h2>Who&apos;s Speakers</h2>
          <div className="bar"></div>

          <div className="bg-title">Speakers</div>

          
        </div>
      </div>

              <div className="row">
                {speakersData?.length > 0 ? (
                  speakersData.map((speaker, index) => (
                    <div className="col-lg-3 col-sm-6" key={index}>
                      <div className="single-speakers" style={{marginBottom:'20px', marginInline:'30px'}}>
                        <Image
                          src={`https://admin.winrh2026.org${speaker.image}`}
                          alt={speaker?.name}
                          width={250}
                    height={300}
                    style={{maxHeight:'300px',height:'300px', width:'100%'}}
                          className="img-fluid"
                        />
                        <div className="speakers-content speakers-content-home">
                          <h3>{speaker?.name}</h3>
                          <span>{speaker?.description}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <p>No speakers available.</p>
                  </div>
                )}
              </div>
    </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center', 
        background:'#f6f4f6',paddingTop:'30px'}}>
      <Link href="/speakers" className="btn btn-primary">
            View More 
          </Link>
      </div>
  </>
  );
};

export default Speakers;
