import React,{useEffect} from "react";
import { UilCalendarAlt,UilGraduationCap,UilBriefcaseAlt } from '@iconscout/react-unicons'

export const Quaification = () => {
    useEffect(()=>{
        const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-Content]');

        tabs.forEach(tab => {
            tab.addEventListener('click' , ()=>{
                const target =  document.querySelector(tab.dataset.target) 
            
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('quaification_active');
            })

            target.classList.add('quaification_active');

            tabs.forEach(tab => {
                tab.classList.remove('quaification_active');
            })
            tab.classList.add('quaification_active');
        })
        })
    },[]);
  return (
    <section className="quaification section" id="quaification">
      <h2 className="section_title">Quaification</h2>
      <div className="quaification_container container">
        <div className="quaification_tabs">
          <div className="quaification_button button--flex quaification_active" data-target='#education'>
            <UilGraduationCap />
            Education
          </div>
          <div className="quaification_button button--flex" data-target='#work'>
            <UilBriefcaseAlt />
            Work
          </div>
        </div>
        <div className="quaification_section">

          <div className="quaification_content quaification_active" data-content id="education">
            <div className="quaification_data">
              <div>
                <h3 className="quaification_title">Computer Engineer</h3>
                <span className="quaification_subtitle">J.C. Bose University of Science and Technology</span>
                <div className="quaification_calender"><UilCalendarAlt /> 2019-2023</div>
              </div>
              <div>
                <span className="quaification_rounder"></span>
                <span className="quaification_line"></span>
              </div>
            </div>


            <div className="quaification_data">
                <div></div>

                <div>
                <span className="quaification_rounder"></span>
                <span className="quaification_line"></span>
              </div>
              
              <div>
                <h3 className="quaification_title">Intermediate Education</h3>
                <span className="quaification_subtitle">Delhi Public School</span>
                <div className="quaification_calender"><UilCalendarAlt /> 2017-2029
                </div>
              </div>
            </div>


            <div className="quaification_data">
              <div>
                <h3 className="quaification_title">Secondary School</h3>
                <span className="quaification_subtitle">DAV Public School</span>
                <div className="quaification_calender"><UilCalendarAlt /> 2008-2017</div>
              </div>
              <div>
                <span className="quaification_rounder"></span>
              </div>
            </div>
          </div>

          <div className="quaification_content" data-content id="work">
            <div className="quaification_data">
              <div>
                <h3 className="quaification_title">Web Developer</h3>
                <span className="quaification_subtitle">30 days Coding</span>
                <div className="quaification_calender"><UilCalendarAlt /> Jan 2021 - Apr 2021</div>
              </div>
              <div>
                <span className="quaification_rounder"></span>
                <span className="quaification_line"></span>
              </div>
              <div></div>
            </div>
            <div className="quaification_data">
                <div></div>
                <div>
                <span className="quaification_rounder"></span>
                <span className="quaification_line"></span>
              </div>
              <div>
                <h3 className="quaification_title">React Developer</h3>
                <span className="quaification_subtitle">Flint Energy</span>
                <div className="quaification_calender"><UilCalendarAlt /> Sept 2021 - Nov 2021</div>
              </div>
            </div>
            <div className="quaification_data">
              <div>
                <h3 className="quaification_title">Front-end Developer</h3>
                <span className="quaification_subtitle">Secure Solar Solution</span>
                <div className="quaification_calender"><UilCalendarAlt /> Jun 2022 - Aug 2022</div>
              </div>
              <div>
                <span className="quaification_rounder"></span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

