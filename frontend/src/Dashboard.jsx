import { AnimatedWord } from "./risingtext";
import { useEffect, useState } from "react";
import CollapsibleSidebar from "./sidebar";
import {
  HomeIcon,
  CreditCard,
  FileText,
  School,
  Star,
  ShoppingCart,
  Check,
  X
} from "lucide-react";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card"; 
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { PieChart, Pie, Cell, Label, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Dashboard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 100);
  }, []);

  const testData = [
    { name: "Attended", value: 18, color: "#3366CC" }, // Sapphire blue
    { name: "Missed", value: 6, color: "#66B2FF" }     // Light blue
  ];
  
  const totalTests = testData.reduce((sum, item) => sum + item.value, 0);
  const attendanceRate = Math.round((testData[0].value / totalTests) * 100);

  const scoreData = [
    { name: "Math", score: 85 },
    { name: "Science", score: 92 },
    { name: "English", score: 78 },
    { name: "History", score: 88 }
  ];

  return (
    <div className="dashboard bg-[#080412] min-h-screen relative">
      {/* Sidebar */}
      <CollapsibleSidebar
        className="fixed top-0 left-0 z-50 h-full"
        links={[
          { name: "Home", icon: <HomeIcon />, path: "/" },
          { name: "Tests", icon: <FileText />, path: "/signup" },
          { name: "Classroom Resources", icon: <School />, path: "/classroom" },
          { name: "Leaderboard", icon: <Star />, path: "/leaderboard" },
          { name: "Marketplace", icon: <ShoppingCart />, path: "/marketplace" },
          { name: "Payment", icon: <CreditCard />, path: "/payment" },
        ]}
      />

      {/* Top Banner Section */}
      <div className="relative w-full h-[400px] overflow-hidden object-contain">
        <img
          src="/dashboardtop.jpg"
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ease-in ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
          onLoad={() => setImageLoaded(true)}
        />
        <AnimatedWord
          word="DASHBOARD"
          staggerCharacters={0.09}
          delay={0.5}
          className="z-20 mt-60 text-2xl text-custom_gradient relative"
        />
      </div>

      {/* Main Content Card */}
      <CardContainer containerClassName="w-full h-screen">
        <CardBody className="w-full h-full flex items-center justify-center">
          <CardItem translateZ={30} className="w-full">
            <div
              style={{
                backgroundColor: "#19113380",
                border: "1px solid #8d31f533",
                borderRadius: "24px",
                padding: "2rem",
                height: "31.5rem",
                display: "flex",
                fontFamily: "sans-serif",
                color: "#5a4d77",
                backdropFilter: "blur(10px)",
                width: "80vw",
                marginTop: "-6rem",
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 1000ms ease-in"
              }}
            >
              {/* Profile Section */}
              <div className="flex-1 flex flex-col items-start pr-8">
                <TextGenerateEffect 
                  words="Profile" 
                  className="text-custom_gradient text-3xl mb-6"
                />
                
                <CardItem translateZ={60}>
                  <img
                    src="/Images/ME.jpeg"
                    alt="Profile"
                    className="w-48 h-48 rounded-[30%] object-cover mb-4"
                    onLoad={() => setImageLoaded(true)}
                  />
                </CardItem>

                <div className="mt-4">
                  <CardItem translateZ={40}>
                    <h2 className="text-xl font-semibold text-white mb-1">
                      Jane Doe
                    </h2>
                  </CardItem>

                  <CardItem translateZ={20}>
                    <p className="text-purple-300">
                      Student | Learner
                    </p>
                  </CardItem>
                </div>
              </div>

              {/* Test Stats Section */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">Test Performance</h3>
                
                <div className="flex gap-4">
                  {/* Smaller Attendance Pie Chart */}
                  <CardItem translateZ={50}>
                    <div className="flex-1 flex items-center justify-center h-64">
                      <PieChart width={200} height={200}>
                        <Pie
                          data={testData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={2}
                          dataKey="value"
                          stroke="none"
                        >
                          {testData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                          <Label
                            content={({ viewBox }) => {
                              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                  <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                  >
                                    <tspan
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      className="fill-white text-2xl font-bold"
                                    >
                                      {totalTests}
                                    </tspan>
                                    <tspan
                                      x={viewBox.cx}
                                      y={(viewBox.cy || 0) + 22}
                                      className="fill-purple-200 text-xs"
                                    >
                                      Total Tests
                                    </tspan>
                                  </text>
                                );
                              }
                            }}
                          />
                        </Pie>
                      </PieChart>
                    </div>
                  </CardItem>

                  {/* New Bar Chart for Subject Scores */}
                  <CardItem translateZ={50}>
                    <div className="flex-1 flex items-center justify-center h-64">
                      <ResponsiveContainer width={200} height={200}>
                        <BarChart
                          data={scoreData}
                          margin={{
                            top: 5,
                            right: 10,
                            left: 0,
                            bottom: 5,
                          }}
                        >
                          <XAxis dataKey="name" tick={{ fill: '#a69cba', fontSize: 10 }} />
                          <YAxis domain={[0, 100]} tick={{ fill: '#a69cba', fontSize: 10 }} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#19113380",
                              borderColor: "#8d31f533",
                              color: "white"
                            }}
                          />
                          <Bar dataKey="score" fill="#3366CC" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardItem>
                </div>

                {/* Stats Breakdown */}
                <CardItem translateZ={30}>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {testData.map((entry, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg"
                        style={{ backgroundColor: `${entry.color}20` }}
                      >
                        <div className="p-2 rounded-full" style={{ backgroundColor: `${entry.color}40` }}>
                          {entry.name === "Attended" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="text-sm text-white">{entry.name}</p>
                          <p className="text-xl font-bold text-white">{entry.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardItem>
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default Dashboard;