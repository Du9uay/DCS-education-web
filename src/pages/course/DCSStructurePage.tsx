import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Server,
  Monitor,
  Network,
  Database,
  HardDrive,
  Cpu,
  Wifi,
  Settings,
  Layout,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const DCSStructurePage: React.FC = () => {
  const hardwareComponents = [
    {
      title: "过程控制站硬件",
      icon: <Server className="w-8 h-8" />,
      description: "过程控制站硬件是DCS系统中直接与工业现场设备打交道的核心部分。它主要由控制器、输入输出（I/O）模块等组成。",
      components: [
        {
          name: "控制器",
          desc: "过程控制站的'大脑'，负责接收输入模块采集的现场信号，如化工生产中常见的温度、压力、流量等信号，然后按照预先设定的控制算法进行运算处理。"
        },
        {
          name: "输入输出模块",
          desc: "连接现场设备与控制器的桥梁，输入模块将现场设备的模拟量或数字量信号传入控制器，输出模块把控制器运算后的结果转换为控制信号。"
        }
      ],
      example: "在化工厂的精馏塔控制中，输入模块会采集塔内的温度信号；输出模块则根据塔内温度变化，控制加热蒸汽的调节阀开度，维持塔内工艺参数稳定。",
      color: "from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)]"
    },
    {
      title: "操作站硬件",
      icon: <Monitor className="w-8 h-8" />,
      description: "操作站是DCS系统中操作人员与系统交互的关键硬件部分，包括操作员站和工程师站。",
      components: [
        {
          name: "操作员站",
          desc: "通过显示器清晰展示工艺流程画面，实时呈现各设备的温度、压力、流量等参数。操作人员利用键盘输入操作指令，通过鼠标精准点击界面按钮来调控生产过程。"
        },
        {
          name: "工程师站",
          desc: "通常是高性能的计算机，具备强大的处理能力。用于对整个DCS系统进行组态配置，编写控制算法、设置参数等。"
        }
      ],
      example: "当发现某反应釜温度异常时，操作员可迅速在操作员站进行参数调整；工程师站可以预先设定反应温度、压力等的控制逻辑程序。",
      color: "from-[color:var(--system-blue)] to-[color:var(--primary-teal)]"
    },
    {
      title: "通讯网络",
      icon: <Network className="w-8 h-8" />,
      description: "在化工DCS系统中，通讯网络是连接各个硬件设备的关键枢纽。它就像一条'信息高速公路'，让不同部分能快速传递数据。",
      components: [
        {
          name: "以太网",
          desc: "在大型化工生产装置中，多个控制站、操作站通过以太网相互连接。操作站可以实时获取各个现场设备的温度、压力等参数。"
        },
        {
          name: "现场总线",
          desc: "像Profibus现场总线在中小型化工设备中应用广泛，能将现场的传感器、执行器与DCS的控制单元紧密连接，实现设备间的精准数据交互。"
        }
      ],
      example: "在化工车间的某个反应釜控制中，现场总线能把反应釜内的温度传感器数据及时传给控制单元，控制单元再根据设定值调整加热或冷却设备的运行。",
      color: "from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)]"
    }
  ];

  const softwareComponents = [
    {
      title: "组态软件",
      icon: <Settings className="w-6 h-6" />,
      description: "组态软件是DCS软件组成的核心部分，它主要用于对DCS系统进行配置和设定。",
      features: [
        "定义控制回路",
        "设置工艺参数",
        "规划控制逻辑",
        "图形化界面操作"
      ],
      example: "在某炼油厂的DCS系统中，工程师利用组态软件来设定精馏塔的温度、压力等工艺参数，还能规划物料的流量控制逻辑。"
    },
    {
      title: "实时数据库",
      icon: <Database className="w-6 h-6" />,
      description: "实时数据库是DCS软件组成的关键部分，它就像一个高效的'数据管家'。",
      features: [
        "实时数据存储",
        "数据快速更新",
        "历史数据管理",
        "数据查询分析"
      ],
      example: "温度、压力、流量等众多工艺参数会源源不断地传入实时数据库，让操作人员能随时通过DCS界面查看当前的工艺状态。"
    },
    {
      title: "人机界面HMI",
      icon: <Layout className="w-6 h-6" />,
      description: "人机界面HMI是DCS系统中操作人员与系统交互的重要部分。",
      features: [
        "流程图显示",
        "实时参数监控",
        "报警管理",
        "趋势曲线分析"
      ],
      example: "在化工炼油装置中，HMI会实时显示储罐的液位高度、管道内流体的温度等，操作人员可以通过鼠标点击、键盘输入等方式下达操作指令。"
    }
  ];

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
            <HardDrive className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[color:var(--text-primary)] mb-4">
            DCS的基本结构及组成
          </h1>
          <p className="text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">
            系统学习DCS的硬件组成与软件系统，掌握各组件功能及在化工生产中的实际应用
          </p>
        </motion.div>

        {/* 系统架构图 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-deep p-8 mb-12 border border-[color:var(--primary-teal)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-6 text-center">
            DCS系统整体架构
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="glass-effect p-6 mb-4">
                <Cpu className="w-12 h-12 text-[color:var(--primary-teal)] mx-auto mb-2" />
                <h3 className="font-bold text-[color:var(--text-primary)]">过程控制级</h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-2">
                  直接面向生产过程，实现分散控制
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="glass-effect p-6 mb-4">
                <Wifi className="w-12 h-12 text-[color:var(--accent-orange)] mx-auto mb-2" />
                <h3 className="font-bold text-[color:var(--text-primary)]">通信网络</h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-2">
                  连接各级设备，实现数据传输
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="glass-effect p-6 mb-4">
                <Monitor className="w-12 h-12 text-[color:var(--system-blue)] mx-auto mb-2" />
                <h3 className="font-bold text-[color:var(--text-primary)]">过程监控级</h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-2">
                  集中监视管理，人机交互界面
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 硬件组成部分 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] text-center mb-8">
            硬件组成部分
          </h2>
          
          <div className="space-y-8">
            {hardwareComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-deep p-8 border border-[color:var(--primary-teal)]/10 hover:border-[color:var(--primary-teal)]/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {component.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-3">
                      {component.title}
                    </h3>
                    <p className="text-[color:var(--text-secondary)] mb-4 leading-relaxed">
                      {component.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {component.components.map((comp, compIndex) => (
                        <div key={compIndex} className="glass-light p-4">
                          <h4 className="font-semibold text-[color:var(--primary-teal)] mb-2">
                            {comp.name}
                          </h4>
                          <p className="text-sm text-[color:var(--text-secondary)]">
                            {comp.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-[color:var(--bg-medium)]/30 rounded-lg border-l-4 border-[color:var(--accent-orange)]">
                      <p className="text-sm text-[color:var(--text-secondary)]">
                        <span className="font-semibold text-[color:var(--accent-orange)]">应用实例：</span>
                        {component.example}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 软件组成部分 */}
        <div>
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] text-center mb-8">
            软件组成部分
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softwareComponents.map((software, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-effect p-6 border border-[color:var(--primary-teal)]/10 hover:border-[color:var(--primary-teal)]/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--system-green)] to-[color:var(--primary-teal)] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  {software.icon}
                </div>
                
                <h3 className="text-lg font-bold text-[color:var(--text-primary)] mb-3">
                  {software.title}
                </h3>
                
                <p className="text-sm text-[color:var(--text-secondary)] mb-4">
                  {software.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {software.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[color:var(--primary-teal)] rounded-full" />
                      <span className="text-sm text-[color:var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-[color:var(--primary-teal)]/20">
                  <p className="text-xs text-[color:var(--text-muted)]">
                    {software.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 底部导航 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/course/dcs-basics"
            className="btn-glass rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一页：DCS基础介绍</span>
          </Link>
          
          <Link
            to="/course/dcs-signal-types"
            className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>下一页：DCS信号类型</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DCSStructurePage;