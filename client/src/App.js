import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
// Views
import Landing from '../src/views/Landing';
import Quotes from '../src/views/Quotes';
import CTATrainTracker from '../src/views/CTATrainTracker';
import CharacterCounter from '../src/views/characterCounter';
import GoogleCalendarAddTask from '../src/views/GoogleCalendarAddTask';
import ClockWidget from '../src/views/ClockWidget';
import Register from '../src/views/accounts/Register';
import Login from '../src/views/accounts/Login';
import NotFoundView from './views/NotFoundView';
// Navigation
import WidgetOutletComponent from './components/navigation/WidgetOutletComponent';
import LiveOutletComponent from './components/navigation/LiveOutletComponent';
import ConfigureOutletComponent from './components/navigation/ConfigureOutletComponent';
// Styles
import './styles/App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="widget" element={<WidgetOutletComponent />}>
                        {/* Public Paths */}
                        <Route path="live" element={<LiveOutletComponent />}>
                            <Route
                                path="quotes/:widgetid"
                                element={<Quotes />}
                            />
                            <Route
                                path="cta/:widgetid"
                                element={<CTATrainTracker />}
                            />
                            <Route
                                path="clock/:widgetid"
                                element={<ClockWidget />}
                            />
                            <Route
                                path="characterCounter/:widgetid"
                                element={<CharacterCounter />}
                            />
                        </Route>
                        {/* These will need to be private paths */}
                        <Route
                            path="configure"
                            element={<ConfigureOutletComponent />}
                        >
                            <Route
                                path="quotes/:widgetid"
                                element={<Quotes />}
                            />
                            <Route
                                path="cta/:widgetid"
                                element={<CTATrainTracker />}
                            />
                            <Route
                                path="clock/:widgetid"
                                element={<ClockWidget />}
                            />
                            <Route
                                path="characterCounter/:widgetid"
                                element={<CharacterCounter />}
                            />
                        </Route>
                    </Route>

                    {/* Public Paths */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Landing />} />

                    {/* Catch All */}
                    <Route path="*" element={<NotFoundView />} />

                    {/* Remove after Creation of user account and whatnot */}
                    <Route path="/Quotes" element={<Quotes />} />
                    <Route path="/CTA" element={<CTATrainTracker />} />
                    <Route path="/clock" element={<ClockWidget />} />
                    <Route
                        path="/characterCounter"
                        element={<CharacterCounter />}
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
