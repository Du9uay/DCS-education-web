import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Activity,
  TrendingUp,
  ToggleLeft,
  Gauge,
  Thermometer,
  Wind,
  Power,
  Zap,
  CircuitBoard,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const DCSSignalTypesPage: React.FC = () => {
  const signalTypes = [
    {
      category: "模拟量输入（AI）",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "连续变化的输入信号，用于采集温度、压力、流量、液位等连续变化的工艺参数",
      range: "常见信号范围：4-20mA、0-10V、1-5V",
      characteristics: [
        "信号连续变化",
        "精度要求高",
        "需要A/D转换",
        "抗干扰能力相对较弱"
      ],
      devices: [
        { name: "压力变送器", function: "测量管道、容器内压力" },
        { name: "液位变送器", function: "测量储罐、反应釜液位" },
        { name: "流量计", function: "测量管道内流体流量" },
        { name: "热电阻/热电偶", function: "测量温度参数" }
      ],
      color: "from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)]"
    },
    {
      category: "模拟量输出（AO）",
      icon: <Gauge className="w-8 h-8" />,
      description: "连续变化的输出信号，用于控制调节阀开度、变频器频率等连续调节设备",
      range: "常见信号范围：4-20mA、0-10V",
      characteristics: [
        "信号连续可调",
        "控制精度高",
        "需要D/A转换",
        "实现精确控制"
      ],
      devices: [
        { name: "调节阀", function: "控制阀门开度（0-100%）" },
        { name: "变频器", function: "调节电机转速频率" },
        { name: "电动执行器", function: "控制执行机构位置" },
        { name: "加热器功率", function: "调节加热功率输出" }
      ],
      color: "from-[color:var(--system-blue)] to-[color:var(--primary-teal)]"
    },
    {
      category: "数字量输入（DI）",
      icon: <ToggleLeft className="w-8 h-8" />,
      description: "离散的开关量输入信号，用于检测设备运行状态、故障信号、限位开关等",
      range: "信号状态：0（断开）或1（闭合）",
      characteristics: [
        "只有两种状态",
        "抗干扰能力强",
        "响应速度快",
        "电路简单可靠"
      ],
      devices: [
        { name: "电机运行信号", function: "检测电机是否运行" },
        { name: "故障信号", function: "设备故障报警信号" },
        { name: "远程/就地", function: "控制模式选择" },
        { name: "阀门到位信号", function: "阀门开/关到位反馈" }
      ],
      color: "from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)]"
    },
    {
      category: "数字量输出（DO）",
      icon: <Power className="w-8 h-8" />,
      description: "离散的开关量输出信号，用于控制设备的启停、阀门的开关等离散动作",
      range: "信号状态：0（断开）或1（闭合）",
      characteristics: [
        "控制简单明确",
        "可靠性高",
        "响应迅速",
        "适合逻辑控制"
      ],
      devices: [
        { name: "泵的启停", function: "控制泵的启动和停止" },
        { name: "阀门开关", function: "控制开关阀的开启关闭" },
        { name: "报警灯", function: "控制报警指示灯" },
        { name: "电磁阀", function: "控制电磁阀通断" }
      ],
      color: "from-[color:var(--system-green)] to-[color:var(--primary-teal)]"
    }
  ];

  const signalComparison = {
    analog: {
      title: "模拟信号（AI/AO）",
      icon: <Activity className="w-6 h-6" />,
      features: [
        "连续变化的信号",
        "电压或电流值在一定范围内连续变化",
        "能精确反映物理量的变化",
        "适用于需要精确控制的场景"
      ],
      example: "模拟量温度传感器输出的0-10V电压信号，能连续反映温度的变化情况",
      advantages: "精确度高、信息量大",
      disadvantages: "抗干扰能力相对较弱"
    },
    digital: {
      title: "数字信号（DI/DO）",
      icon: <CircuitBoard className="w-6 h-6" />,
      features: [
        "离散的、不连续的信号",
        "仅有两个状态（0和1）",
        "用于开关量控制",
        "逻辑判断基于离散状态"
      ],
      example: "开关的闭合（1状态）与断开（0状态）、继电器的吸合与释放",
      advantages: "抗干扰能力强、可靠性高",
      disadvantages: "只能表示两种状态"
    }
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
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[color:var(--text-primary)] mb-4">
            DCS的信号类型
          </h1>
          <p className="text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">
            掌握模拟量与数字量信号的区分与处理，学习各类仪表设备的信号采集与控制应用
          </p>
        </motion.div>

        {/* 信号定义 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-deep p-8 mb-12 border border-[color:var(--primary-teal)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-4">
            信号的定义
          </h2>
          <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed">
            作为控制装置的作用目标，被控对象有其自己的运行状态，这些状态是生产过程的表征，
            控制系统将通过测量被控对象的运行状态来了解生产过程。
            这些表征生产过程状态的量一般分为<span className="font-bold text-[color:var(--primary-teal)]">模拟量</span>和
            <span className="font-bold text-[color:var(--accent-orange)]">开关量</span>两大类。
          </p>
        </motion.div>

        {/* 信号类型对比 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {Object.values(signalComparison).map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-effect p-6 border border-[color:var(--primary-teal)]/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-lg flex items-center justify-center shadow-lg">
                  {signal.icon}
                </div>
                <h3 className="text-xl font-bold text-[color:var(--text-primary)]">
                  {signal.title}
                </h3>
              </div>
              
              <ul className="space-y-2 mb-4">
                {signal.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[color:var(--primary-teal)] rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-[color:var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-3 bg-[color:var(--bg-medium)]/30 rounded-lg mb-3">
                <p className="text-sm text-[color:var(--text-secondary)]">
                  <span className="font-semibold">示例：</span>{signal.example}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 bg-[color:var(--system-green)]/10 rounded">
                  <span className="text-[color:var(--system-green)] font-semibold">优势：</span>
                  <span className="text-[color:var(--text-secondary)]">{signal.advantages}</span>
                </div>
                <div className="p-2 bg-[color:var(--system-red)]/10 rounded">
                  <span className="text-[color:var(--system-red)] font-semibold">局限：</span>
                  <span className="text-[color:var(--text-secondary)]">{signal.disadvantages}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 四种信号类型详解 */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] text-center mb-8">
            四种信号类型详解
          </h2>
          
          {signalTypes.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-deep p-8 border border-[color:var(--primary-teal)]/10 hover:border-[color:var(--primary-teal)]/30 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${signal.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {signal.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">
                    {signal.category}
                  </h3>
                  <p className="text-[color:var(--text-secondary)] mb-3">
                    {signal.description}
                  </p>
                  <p className="text-sm text-[color:var(--accent-orange)] mb-4">
                    {signal.range}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 特性 */}
                    <div className="glass-light p-4">
                      <h4 className="font-semibold text-[color:var(--primary-teal)] mb-3">信号特性</h4>
                      <ul className="space-y-2">
                        {signal.characteristics.map((char, charIndex) => (
                          <li key={charIndex} className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[color:var(--primary-teal)]" />
                            <span className="text-sm text-[color:var(--text-secondary)]">{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* 仪表设备 */}
                    <div className="glass-light p-4">
                      <h4 className="font-semibold text-[color:var(--primary-teal)] mb-3">仪表设备</h4>
                      <div className="space-y-2">
                        {signal.devices.map((device, deviceIndex) => (
                          <div key={deviceIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[color:var(--accent-orange)] rounded-full mt-1.5 flex-shrink-0" />
                            <div>
                              <span className="text-sm font-medium text-[color:var(--text-primary)]">
                                {device.name}：
                              </span>
                              <span className="text-sm text-[color:var(--text-secondary)]">
                                {device.function}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 实际应用示例 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="glass-deep p-8 mt-12 border border-[color:var(--accent-orange)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-6 text-center">
            化工生产中的实际应用
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Thermometer className="w-12 h-12 text-[color:var(--primary-teal)] mx-auto mb-3" />
              <h3 className="font-bold text-[color:var(--text-primary)] mb-2">反应釜温度控制</h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                AI采集温度信号 → 控制器PID运算 → AO输出控制蒸汽阀门开度
              </p>
            </div>
            
            <div className="text-center">
              <Wind className="w-12 h-12 text-[color:var(--accent-orange)] mx-auto mb-3" />
              <h3 className="font-bold text-[color:var(--text-primary)] mb-2">泵站控制系统</h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                DI检测泵运行状态 → DO控制泵的启停 → AI监测出口压力
              </p>
            </div>
          </div>
        </motion.div>

        {/* 底部导航 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/course/dcs-structure"
            className="btn-glass rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一页：DCS结构与组成</span>
          </Link>
          
          <Link
            to="/course/dcs-vs-plc"
            className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>下一页：DCS与PLC的区别</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DCSSignalTypesPage;