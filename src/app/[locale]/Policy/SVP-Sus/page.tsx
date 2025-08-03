import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function SustainableNatural() {
  return (
    <div className="flex flex-col justify-center text-center item-center bg-gradient-to-r from-sky-500 to-green-300 text-black items-center py-30 px-4 sm:px-10">
      <div className="bg-white rounded-xl w-full max-w-5xl px-4 sm:px-10 py-8">
        <Breadcrumb />
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/assets/imgs/LogoSVP.png"
            alt="Company Logo"
            width={200}
            height={120}
          />
        </div>
        <div className="text-left grid grid-cols-1 sm:grid-cols-6 gap-4 py-10">
          <h1 className="col-span-4 font-semibold text-lg sm:text-xl text-center sm:text-center">
            SV Polymer Sustainable Natural Rubber Policys
          </h1>

          {/* คำอธิบายย่อย */}
          <p className="col-span-4 text-base text-start sm:text-center px-4 sm:px-2">
            SV Polymer Values and Principles
          </p>
          <p className="text-base text-balance col-start-2 col-end-6 p-2">
            SV Polymer Co., Ltd is a manufacturer and distributor of block
            rubber both in and outside Thailand. The core activity of SV Polymer
            is Natural Rubber which is an environmentally friendly and renewable
            resource. We understand that our activities will impact the
            environment, the life of the farmers who painstakingly tap each tree
            before the dawning of the sun and the safety of our lives who rely
            on the tires that uses natural rubber to bring us for mobility.
          </p>
          <p className="text-base text-balance col-start-2 col-end-6 p-2">
            As it takes 7 years to grow the rubber tree before it can start the
            20 years production of latex, our business is long term. In SV
            Polymer, we seek to maintain a balance between business performance,
            environmental stewardship and our continual building of sustainable
            relationships with our partners and employees. To successfully meet
            the ever-changing challenges and Contributing to the well-being of
            the humanity, we base our values in
          </p>
          {/* //ทำเป็นข้อ */}
          <ul className="text-base text-balance list-disc col-start-2 col-end-6 p-2">
            <li>Satisfying our customers requirements and needs. </li>
            <li>Contributing to the organization economic performance.</li>
            <li>
              Establishing relationships of honesty and integrity with our
              partners and suppliers.
            </li>
            <li>Respecting the people.</li>
            <li>Respect Facts Promoting environmental friendly activities.</li>
            <li>Assuring Quality Product.</li>
            <li> Encouraging continual innovation and development.</li>
            <li>Sustainability as our long-term vision</li>
          </ul>
          {/* <p className="text-base text-balance list-disc col-start-2 col-end-6 p-2"></p> */}
          <p className="text-base text-balance col-start-2 col-end-6 p-2">
            SV Polymer is committed to build a sustainable business with strong
            social relevance and inclusive growth of contribution to the society
            by supporting causes on various concerns including road safety,
            healthcare, environmental sustainability, promoting education,
            promoting sports and other rural development activities. In
            pursuance of our vision that SV Polymer desires to be a Company
            which society wants to exist, we are dedicated towards fulfilling
            the social objectives through various CSR activities. The Company
            shall make the activities endeavor to positively impact and
            influence the Society for its sustainable development. We pledge to
            continuously improve our performance related to respect of people
            and of the environment. Our supplier relations are driven by the
            core principles outlined in Value and principle above, which also
            guided by the principles of impartiality, fairness and loyalty.
          </p>
          <p className="text-base text-balance col-start-2 col-end-6 p-2">
            Successful business did not come from only hard work or special
            technical ability but derived from synergy and create share value
            among the community, country and company. Only then will it be
            sustainable.
          </p>
          <p className="text-base text-balance col-start-2 col-end-6 p-2">
            Sustainable Natural Rubber Policy Components
          </p>
          <p className="text-base text-balance col-start-2 col-end-6 p-2">
            SV Polymer Co., Ltd aligns itself with industry leading commitments,
            and has developed its sustainable natural rubber policy with
            reference to the Global Platform for Sustainable Natural Rubber
            (GPSNR) Policy Framework. In line with its commitment to source and
            process natural rubber in a sustainable manner, SV Polymer Co., Ltd
            commits and requires its suppliers to commit to the following:
          </p>
          {/* ทำเป็นข้อๆ */}
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>1. Commitment to Legal Compliance</li>
            <li>
              1.1. Complying with applicable local, national and international
              laws on human rights, labour, land use, and the environment
            </li>
            <li>
              1.2. Working against corruption in all of its forms including
              extortion and bribery.
            </li>
            <li></li>
            <li></li>
          </ul>
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>2. Commitment to Healthy, Functioning Ecosystems</li>
            <li>
              2.1. Commitment to zero deforestation principles and no conversion
              of natural ecosystems
            </li>
            <li>
              2.1.1. Producing and sourcing natural rubber in a way that does
              not contribute to deforestation or degrade High Conservation
              Values (HCVs). Identification and management of areas for
              development and conservation follow the methodology and guidance
              consistent with the HCV Approach and with the High Carbon Stock
              Approach (HCSA).
            </li>
            <li>
              2.1.2. Natural rubber from areas deforested or where HCVs have
              been degraded after the cutoff date of 1 April 2019 is considered
              to be non-conforming with this policy element.
            </li>
            <li>
              2.2. Supporting the long-term protection of natural forests and
              other ecosystems and their conservation values, and restoring or
              supporting restoration of deforested and degraded rubber
              landscapes. SV Polymer Sustainable Natural Rubber Policy
            </li>
            <li>
              2.3. Not using open burning/fire in new or ongoing operations for
              land preparation, land management, waste management, or any other
              reason other than in justified and documented cases of fire break
              establishment, waste management for sanitary reasons where public
              garbage collection is not available, phytosanitary and other
              emergencies.
            </li>
            <li>
              2.4. Protecting wildlife, including rare, threatened, endangered
              and critically endangered species from poaching, over-hunting and
              habitat loss in areas under company management and supporting
              wildlife protection activities in areas of influence. No hunting
              except certain instances of sustainable hunting by local
              communities for subsistence purposes that do not cause decline of
              local species populations.
            </li>
            <li>
              2.5. Protecting water quantity and quality, preventing water
              contamination from agricultural and industrial chemicals, and
              preventing erosion and sedimentation. Protecting natural waterways
              through appropriate controls including buffer zones.
            </li>
            <li>
              2.6. Protecting soil quality, preventing erosion, nutrient
              degradation, subsidence and contamination.
            </li>
            <li>
              2.7. Preventing the development of or sourcing from natural rubber
              plantations on peat, regardless of depth, extent, or status (wet,
              drained or dry).
            </li>
            <li>
              2.8. Minimizing use of chemicals (agrochemicals), including
              pesticides and chemical fertilizer through reductions and with
              promoting Integrated Pest Management approaches. No use of World
              Health Organisation (WHO) Class 1A and 1B pesticides and paraquat.
              No use of chemicals listed under the Stockholm Convention and
              Rotterdam Convention.
            </li>
          </ul>
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>3. Commitment to Respecting all Human Rights</li>
            <li>
              3.1. Respecting and protecting internationally recognized human
              rights (including upholding the UN Guiding Principles on Business
              and Human Rights [UNGP]) by avoiding causing or contributing to
              adverse human rights impacts and preventing or mitigating any harm
              linked to company operations.
            </li>
            <li>
              3.2. Establishing and maintaining a company grievance mechanism
              (consistent with UNGP effectiveness criteria) to receive
              complaints and remedy adverse impacts they have caused due to
              production and sourcing.
            </li>
            <li>
              3.3. Recognizing and protecting the customary, traditional and
              communal land tenure rights of indigenous peoples and local
              communities (IP/LC) including: Carrying out operations in
              accordance with the UN Declaration on the Rights of Indigenous
              Peoples (UNDRIP) Ensuring ongoing land tenure and access rights
              Upholding traditional rights of access for hunting and gathering
              of animals and plants for the purpose of subsistence and
              indigenous cultural and religious traditions, customs and
              ceremonies
            </li>
            <li>3.4. Free, prior, and informed consent (FPIC) </li>
            <li>
              3.4.1. Ensuring that, prior to any activity that might affect
              IP/LC rights to their lands, territories, and resources, their
              free, prior, and informed consent (FPIC) is secured. This includes
              when planning, establishing, restoring, or transforming corporate
              plantations and/or industrial sites. as well as associated
              infrastructure. The FPIC process is done in a culturally
              appropriate manner and follows credible accepted methodologies and
              associated GPSNR guidance. IP/LC have the right to give or
              withhold their consent to any activity that is subject to the FPIC
              process.
            </li>
            <li>
              3.4.2. Where operations impinge on IP/LC rights, compensating or
              accommodating IP/LC through appropriate, mutually agreed measures
              reflecting and described in the negotiated outcomes of the FPIC
              process.
            </li>
            <li>
              3.4.3. Adopting measures to provide remedy through mutually agreed
              procedures in cases where the company previously has caused or
              contributed to the appropriation of or harm to the lands,
              territories, or resources of IP/LC without securing FPIC.
              Implementation is jointly monitored by the community and the GPSNR
              member and/or by mutually agreed third party(ies).
            </li>
            <li>
              3.5. Establishing ongoing, effective, culturally appropriate
              channels of dialogue with indigenous people and local communities.
            </li>
            <li>
              3.6. Upholding applicable labour rights and labour laws in the
              jurisdictions where operating, the UN Guiding Principles on
              Business and Human Rights, and the intent of the International
              Labor Organizations eight core conventions. This includes:{" "}
            </li>
            <li>
              3.6.1. Freedom of association and collective bargaining (ILO
              Convention No. 87 and No. 98) SV Polymer Sustainable Natural
              Rubber Policy
            </li>
            <li>
              3.6.2. No forced labour (ILO Convention No. 29 and its 2014
              Protocol)
            </li>
            <li>3.6.3. No child labour (ILO Convention No. 138 and No. 182)</li>
            <li>
              3.6.4. Decent living wages (ensuring that an employees salary is
              at least equal to the countrys minimum salary for an equivalent
              job with the view of fostering an adequate/decent living wage as
              envisioned by the ILO Conventions 100, 105 and 131)
            </li>
            <li>
              3.6.5. No discrimination (ILO Convention No. 111 and No. 100),
              including eliminating gender related discrimination with regards
              to employment{" "}
            </li>
            <li> 3.6.6. Legal working hours</li>
            <li>
              3.6.7. Safe and healthy workplaces, addressing occupational health
              and safety
            </li>
            <li>
              3.6.8. No abusive practices (ILO Convention No. 105) 3.6.9. Gender
              equity{" "}
            </li>
            <li>
              {" "}
              3.6.10. Safeguards apply to all workers, including contract,
              temporary and migrant workers.
            </li>
          </ul>
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>4. Commitment to Community Livelihoods</li>
            <li>
              4.1. Supporting decent living conditions of local communities
              (e.g., drinking water, adequate housing. sanitation), including
              essential community services and facilities.
            </li>
            <li>
              4.2. Supporting the right to food and food security of
              individuals, households and local communities. Mitigating impacts
              on food security.
            </li>
            <li>
              4.3. Supporting the economic, social and cultural rights of local
              people, including through access to education and employment
              (business/work opportunities).
            </li>
          </ul>
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>
              {" "}
              5. Commitment to Increased Production Efficiency and to support
              smallholders
            </li>
            <li>
              5.1. Offering or supporting training for natural rubber producers,
              including smallholders, to improve yield and quality.
            </li>
            <li> 5.2. Managing operations to minimize rate of energy usage.</li>
            <li>
              5.3. Managing operations to maximize natural resource efficiency.
            </li>
            <li>5.4. Minimizing and mitigating carbon emissions.</li>
          </ul>
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>
              6. Commitment to Systems and Processes to Drive Effective
              Implementation of Policy Components
            </li>
            <li>
              6.1. Setting public, timebound and geographic-specific targets and
              milestones with their associated indicators/metrics for applying
              its commitments. SV Polymer Sustainable Natural Rubber Policy{" "}
            </li>
            <li>
              6.2. Embedding commitments into decision-making processes,
              systems, and performance metrics of corporate management, relevant
              business units, joint ventures, and company affiliates and
              subsidiaries.{" "}
            </li>
            <li>
              6.3. Maintaining an active, regular stakeholder dialogue to
              provide relevant information, and to afford opportunities for
              feedback and suggestions related to fulfillment of the company s
              commitments.
            </li>
            <li>
              6.4. Participating in/supporting multi-stakeholder planning and
              policy efforts that uphold sustainability principles (including
              those defined by industry platforms such as the Global Platform
              for Sustainable Natural Rubber) at a landscape, jurisdictional or
              other spatial level.
            </li>
          </ul>
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>
              7. Commitment to Supply Chain Assessment, Traceability, and
              Management
            </li>
            <li>
              7.1. Conducting supply chain mapping and assessing suppliers for
              social and environmental risk to prioritize risk mitigation
              actions.
            </li>
            <li>
              7.2. Supporting traceability of natural rubber, at a minimum to an
              appropriate jurisdictional level, to know or control the
              conformance of purchased materials with these Policy Components.
            </li>
            <li>
              7.3. Communicating to all suppliers of natural rubber that
              material produced and processed in accordance and conformance with
              these and the underlying GPSNR Policy Components will be
              preferred. Providing time bound requirements for meeting the
              policy requirements, and ensuring that supplier codes and
              contracts, engagement activities, and other mechanisms reflect
              these supplier expectations.
            </li>
            <li>
              7.4. Regularly engaging the supply chain (both direct and indirect
              suppliers) to support their conformance with company commitments
              through effective incentives, support mechanisms, and purchase
              monitoring systems.
            </li>
            <li>
              7.5. In instances of supplier non-conformance with the defined
              Policy Components in this document, developing time-bound
              implementation plans to move towards conformance and/or
              remediation of past or ongoing harms.
            </li>
          </ul>
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>
              8. Commitment to Monitoring and Reporting on Progress Towards, and
              Conformance
            </li>
            <li>
              {" "}
              8.1. Regularly monitoring progress toward company commitments in
              order to ascertain performance. Applying monitoring systems and
              practices to incorporate crowd-sourced information from local
              stakeholders and affected parties regarding non-conformance with
              commitments. Information sources may be informal or formal.
            </li>
            <li>
              8.2. Reporting publicly on progress and outcomes related to the
              implementation of policy-related commitments at least annually.
            </li>
          </ul>
          <ul className="text-base text-balance col-start-2 col-end-6 p-2">
            <li>
              9. Tax. Anti-corruption, Trade and Customs regulations policy{" "}
            </li>
            <li>9.1. Bribery, Corruption, and Fraud Policy</li>
            <li>
              9.1.1. SV Polymer is committed to conducting business in an
              ethical and honest manner and is committed to implementing and
              enforcing systems that ensure all forms of bribery, corruption,
              and fraud are prevented. SV Polymer has zero tolerance for bribery
              and corrupt activities. We are committed to acting professionally,
              fairly, and with integrity in all business dealings and
              relationships we build with our employees. SV Polymer will
              constantly uphold all laws relating to anti-bribery and corruption
              and adhere to the laws and regulations of Thailand
            </li>
            <li>
              9.1.2. This policy applies to all employees, managers, and owners,
              including temporary or contract employees. Employees must ensure
              that they do not become involved in any way in the payment of
              bribes.{" "}
            </li>
            <li>
              9.1.3. Bribery can be described as: giving or receiving anything
              from any person (usually money, a gift, loan, reward, favour,
              commission or entertainment), as an improper inducement or reward
              for obtaining business, employment or any other benefit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
