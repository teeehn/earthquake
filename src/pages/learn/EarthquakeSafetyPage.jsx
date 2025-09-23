// src/pages/learn/EarthquakeSafetyPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SeoMetadata from '../../components/SeoMetadata';

/**
 * Renders the "Earthquake Safety and Preparedness" learning page.
 * This page will provide essential safety tips for before, during, and after an earthquake.
 * It includes SEO metadata relevant to the topic and a link to navigate back
 * to the main "Learn About Earthquakes" page.
 * This component takes no direct props.
 *
 * @component
 * @returns {JSX.Element} The EarthquakeSafetyPage component.
 */
const EarthquakeSafetyPage = () => {
  return (
    <>
      <SeoMetadata
        title="Earthquake Safety and Preparedness | Learn | Seismic Monitor"
        description="Learn crucial earthquake safety tips. Find out what to do before, during, and after an earthquake to protect yourself and your family."
        keywords="earthquake safety, earthquake preparedness, what to do in an earthquake, earthquake kit, drop cover hold on, seismic safety"
        pageUrl="https://earthquakeslive.com/learn/earthquake-safety"
        canonicalUrl="https://earthquakeslive.com/learn/earthquake-safety"
        type="article"
      />
      <div className="p-3 md:p-4 space-y-4 text-slate-200 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-400">
          Earthquake Safety and Preparedness
        </h1>
        <div className="text-slate-300 space-y-4">
          <p>
            Earthquakes can strike without warning, so being prepared is your best defense. Knowing what to do before, during, and after an earthquake can significantly reduce the risk of injury and damage.
          </p>
          <h2 className="text-xl font-semibold text-indigo-300 pt-2">Before an Earthquake: Be Prepared</h2>
          <p>
            The key to earthquake safety is preparation. Take steps now to make your home and family safer.
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Secure Your Space:</strong> Secure heavy items like bookcases, refrigerators, and water heaters to walls. Store heavy and breakable objects on low shelves.
            </li>
            <li>
              <strong>Make a Plan:</strong> Create a family emergency plan. Identify safe spots in each room (under a sturdy table, against an interior wall). Designate a meeting place outside your home.
            </li>
            <li>
              <strong>Prepare a Kit:</strong> Assemble an emergency kit with water, non-perishable food, a first-aid kit, a flashlight, a fire extinguisher, and a whistle to signal for help.
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-indigo-300 pt-2">During an Earthquake: Drop, Cover, and Hold On</h2>
          <p>
            When you feel the ground shake, react immediately. Do not run outside.
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Drop:</strong> Drop to your hands and knees. This position prevents you from being knocked down and allows you to crawl to shelter.
            </li>
            <li>
              <strong>Cover:</strong> Cover your head and neck with your arms. If a sturdy table or desk is nearby, crawl beneath it for shelter. If not, crawl next to an interior wall (away from windows).
            </li>
            <li>
              <strong>Hold On:</strong> If you are under a table, hold on with one hand; be ready to move with it if it shifts. If you're in a seated position, cover your head and neck with both arms.
            </li>
          </ul>
           <h2 className="text-xl font-semibold text-indigo-300 pt-2">After an Earthquake: Stay Safe</h2>
          <p>
            The danger is not over when the shaking stops. Aftershocks can occur, and there may be other hazards.
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Check for Injuries:</strong> Check yourself and others for injuries. Provide first aid for anyone who needs it.
            </li>
            <li>
              <strong>Check for Hazards:</strong> Look for and extinguish small fires. Check for gas leaks. If you smell gas or hear a blowing or hissing noise, open a window and leave the building immediately.
            </li>
            <li>
              <strong>Stay Informed:</strong> Use a battery-operated radio or your phone to get the latest emergency information. Follow instructions from public safety officials.
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <Link to="/learn" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            &larr; Back to Learn Topics
          </Link>
        </div>
      </div>
    </>
  );
};

export default EarthquakeSafetyPage;
