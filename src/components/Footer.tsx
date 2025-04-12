'use client';

import React, { useState } from "react";
import { churchAddress, phoneNumber } from "@/app";
type Props = {};


export default function Footer() {
  const currentYear = (new Date).getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-sm text-gray-700 py-6 pb-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-4 md:w-2/3">
          <iframe
            className="w-full h-48 rounded-md border border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6026.321999430823!2d-73.87326462388778!3d40.956051722638946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ed14ad36610f%3A0xb15b63bc8a2f105c!2s1%20Tuckahoe%20Rd%2C%20Yonkers%2C%20NY%2010710!5e0!3m2!1sen!2sus!4v1744444923362!5m2!1sen!2sus"
            //  allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex md:flex-col items-start gap-4 md:w-1/3">
          <p className="font-bold text-lg">{churchAddress}</p>
          <p>Sunday at 10:00 am, 11:00 am, 6:00 pm, Wednesday at 7:00 pm</p>
          <a className="font-bold" href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </a>

          <div className="">
            <a className="border p-2 rounded text-white bg-violet-600" href="#">
              Directions
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-white p-4">
        &#169; {`${currentYear}`} Victory Solid Rock Sanctuary
      </div>
    </footer>
  );
}
