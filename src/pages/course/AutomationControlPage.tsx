import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Cpu, 
  Activity,
  Zap,
  CircuitBoard,
  Gauge,
  Wind,
  Power,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const AutomationControlPage: React.FC = () => {
  const systemComponents = [
    {
      title: "传感器—测量元件与变送器",
      icon: <Gauge className="w-6 h-6" />,
      description: "测量元件与变送器的作用是测量各种工艺参数，将温度、压力、流量、液位、成分等物理量转换成一种特定的、统一的气压信号或电压、电流信号输入到控制器。如转换成4~20mA、0~20mA、0~5V、1~5V等信号形式。",
      details: [
        { type: "温度测量设备", example: "热电偶，可在化工反应器中测量温度，将温度转化为电信号" },
        { type: "压力测量设备", example: "压力变送器，能检测化工管道内压力，保障生产安全" },
        { type: "流量测量设备", example: "电磁流量计，用于测量化工液体流量，为生产调控提供数据" }
      ],
      color: "from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)]"
    },
    {
      title: "执行器",
      icon: <Power className="w-6 h-6" />,
      description: "通常指控制阀，它与普通阀门的功能一样，用来改变被控介质的流量，只不过它能接受控制器送来的控制信号，从而自动地根据信号值来改变阀门的开度。",
      details: [
        { type: "气动执行器", example: "以压缩空气为能源，结构简单、成本低，化工反应釜温度控制中常用" },
        { type: "电动执行器", example: "靠电能驱动，控制精准、响应快，在化工管道流量调节中应用广泛" },
        { type: "液动执行器", example: "借助液体压力工作，推力大，适用于大口径、高压力的化工设备" }
      ],
      color: "from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)]"
    },
    {
      title: "控制器",
      icon: <Cpu className="w-6 h-6" />,
      description: "控制器是自动化控制系统的核心部件，它接收检测元件传来的信号，经运算处理后输出控制信号。",
      details: [
        { type: "PLC", example: "模块式PLC在化工中可控制反应釜温度，通过编程实现精准控制" },
        { type: "SCADA", example: "监控反应釜等设备参数，通过采集数据精准控制，保障生产稳定" },
        { type: "DCS", example: "由硬件和软件构成，能精准调节化工生产参数，提升生产效率与产品质量" }
      ],
      color: "from-[color:var(--system-blue)] to-[color:var(--primary-teal)]"
    }
  ];

  const workingPrinciple = {
    title: "自动化控制系统的工作原理",
    description: "自动化控制系统的工作原理其实是一个闭环的控制过程，主要由检测元件、控制器和执行机构三部分协同工作来实现。",
    steps: [
      { 
        step: 1, 
        name: "参数检测", 
        desc: "传感器检测工艺参数（温度、压力、流量等）并转换为电信号",
        icon: <Activity className="w-5 h-5" />
      },
      { 
        step: 2, 
        name: "信号处理", 
        desc: "控制器接收信号，与设定值比较，进行PID运算处理",
        icon: <CircuitBoard className="w-5 h-5" />
      },
      { 
        step: 3, 
        name: "控制输出", 
        desc: "控制器输出控制信号给执行器",
        icon: <Zap className="w-5 h-5" />
      },
      { 
        step: 4, 
        name: "执行动作", 
        desc: "执行器根据信号调节阀门开度等，改变工艺参数",
        icon: <Wind className="w-5 h-5" />
      },
      { 
        step: 5, 
        name: "反馈循环", 
        desc: "参数变化后重新被传感器检测，形成闭环控制",
        icon: <Settings className="w-5 h-5" />
      }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-full mb-4 shadow-lg">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[color:var(--text-primary)] mb-4">
            自动化控制系统原理
          </h1>
          <p className="text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">
            深入理解自动化控制系统的工作原理，掌握传感器、控制器、执行器的协同工作方式
          </p>
        </motion.div>

        {/* 工作原理流程图 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-deep p-8 mb-12 border border-[color:var(--primary-teal)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-6">
            {workingPrinciple.title}
          </h2>
          <p className="text-[color:var(--text-secondary)] mb-8 leading-relaxed">
            {workingPrinciple.description}
          </p>
          
          {/* 流程步骤 */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[color:var(--primary-teal)] to-[color:var(--accent-orange)] -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {workingPrinciple.steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  <div className="glass-effect p-4 text-center relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div className="w-10 h-10 bg-[color:var(--bg-medium)] rounded-lg flex items-center justify-center mx-auto mb-2 text-[color:var(--accent-orange)]">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-[color:var(--text-primary)] mb-1">{item.name}</h4>
                    <p className="text-sm text-[color:var(--text-secondary)]">{item.desc}</p>
                  </div>
                  
                  {/* 箭头 */}
                  {index < workingPrinciple.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <svg className="w-6 h-6 text-[color:var(--accent-orange)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 系统组成部分 */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] text-center mb-8">
            自动化控制系统的组成部分
          </h2>
          
          {systemComponents.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-deep p-8 border border-[color:var(--primary-teal)]/10 hover:border-[color:var(--primary-teal)]/30 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {component.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-3">
                    {component.title}
                  </h3>
                  <p className="text-[color:var(--text-secondary)] mb-6 leading-relaxed">
                    {component.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {component.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="glass-light p-4">
                        <h4 className="font-semibold text-[color:var(--primary-teal)] mb-2">
                          {detail.type}
                        </h4>
                        <p className="text-sm text-[color:var(--text-secondary)]">
                          {detail.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PID控制算法介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="glass-deep p-8 border border-[color:var(--accent-orange)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-6 text-center">
            PID控制算法
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--system-green)] to-[color:var(--primary-teal)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <h3 className="text-lg font-bold text-[color:var(--text-primary)] mb-2">比例控制</h3>
              <p className="text-[color:var(--text-secondary)]">
                快速响应偏差，偏差越大，控制作用越强，但存在稳态误差
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">I</span>
              </div>
              <h3 className="text-lg font-bold text-[color:var(--text-primary)] mb-2">积分控制</h3>
              <p className="text-[color:var(--text-secondary)]">
                消除稳态误差，对偏差进行累积，实现无差调节
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--system-blue)] to-[color:var(--primary-teal)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-lg font-bold text-[color:var(--text-primary)] mb-2">微分控制</h3>
              <p className="text-[color:var(--text-secondary)]">
                预测偏差变化趋势，提前调节，改善系统动态性能
              </p>
            </div>
          </div>
        </motion.div>

        {/* 底部导航 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/course-overview"
            className="btn-glass rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一页：课程概述</span>
          </Link>
          
          <Link
            to="/course/dcs-basics"
            className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>下一页：DCS基础介绍</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutomationControlPage;