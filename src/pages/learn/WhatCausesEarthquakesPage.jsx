// src/pages/learn/WhatCausesEarthquakesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SeoMetadata from '../../components/SeoMetadata';

/**
 * Renders the "What Causes Earthquakes?" learning page.
 * This page will explain the geological processes that lead to earthquakes.
 * It includes SEO metadata relevant to the topic and a link to navigate back
 * to the main "Learn About Earthquakes" page.
 * This component takes no direct props.
 *
 * @component
 * @returns {JSX.Element} The WhatCausesEarthquakesPage component.
 */
const WhatCausesEarthquakesPage = () => {
  return (
    <>
      <SeoMetadata
        title="What Causes Earthquakes? | Learn | Seismic Monitor"
        description="Discover the primary causes of earthquakes, from tectonic plate movements and fault lines to volcanic activity and human-induced tremors."
        keywords="what causes earthquakes, earthquake origins, fault lines, tectonic plates, seismic events, geology, learn seismology"
        pageUrl="https://earthquakeslive.com/learn/what-causes-earthquakes"
        canonicalUrl="https://earthquakeslive.com/learn/what-causes-earthquakes"
        type="article"
      />
      <div className="p-3 md:p-4 space-y-4 text-slate-200 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-400">
          What Causes Earthquakes?
        </h1>
        <div className="text-slate-300 space-y-4">
          <p>
            Earthquakes are one of the most powerful and destructive natural forces. They are the result of sudden movement along fractures in the Earth's crust, known as faults. This movement releases a tremendous amount of stored energy in the form of seismic waves, which travel through the Earth and cause the ground to shake.
          </p>
          <h2 className="text-xl font-semibold text-indigo-300 pt-2">The Role of Plate Tectonics</h2>
          <p>
            The primary cause of earthquakes is the movement of Earth's tectonic plates. The Earth's outer shell, the lithosphere, is not a single, solid piece. Instead, it's broken into about 15 major plates that are constantly, slowly moving—typically only a few centimeters per year. These plates float on the semi-fluid asthenosphere below.
          </p>
          <p>
            The immense energy required to move these plates builds up as stress at their boundaries. When the stress exceeds the strength of the rocks, the rock fractures and slips, causing an earthquake. There are three main types of plate boundaries where this activity is concentrated:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Convergent Boundaries:</strong> Where two plates collide. One plate can be forced under the other (a process called subduction), or the plates can crumple and push upwards to form mountain ranges. These boundaries are responsible for the largest and deepest earthquakes.
            </li>
            <li>
              <strong>Divergent Boundaries:</strong> Where two plates are moving apart. Magma from the mantle rises to the surface, creating new crust. Earthquakes at these boundaries are common but are usually smaller and occur at shallower depths.
            </li>
            <li>
              <strong>Transform Boundaries:</strong> Where two plates slide horizontally past each other. The motion is not smooth; the plates lock together, building up stress. When they finally slip, it can cause powerful, shallow earthquakes. The San Andreas Fault in California is a famous example of a transform boundary.
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-indigo-300 pt-2">Faults: The Source of the Shake</h2>
          <p>
            A fault is a fracture or zone of fractures between two blocks of rock. Earthquakes occur on these faults. While most faults are associated with plate boundaries, they can also exist within plates (intraplate earthquakes). The location where the earthquake begins is called the hypocenter, and the point on the Earth's surface directly above it is the epicenter.
          </p>
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

export default WhatCausesEarthquakesPage;
