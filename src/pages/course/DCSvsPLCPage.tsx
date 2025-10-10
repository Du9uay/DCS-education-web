import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu,
  GitCompare,
  Factory,
  TrendingUp,
  Settings,
  Database,
  Network,
  DollarSign,
  Wrench,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const DCSvsPLCPage: React.FC = () => {
  const plcDefinition = {
    title: "PLC的定义",
    description: "全称为可编程逻辑控制器（Programmable Logic Controller），它是一种专门为工业环境设计的数字运算操作电子系统。",
    details: "它就像一个能按照人们预先设定好的程序来控制工业设备运行的'大脑'。通过可编程的存储器，存储着执行逻辑运算、顺序控制、定时、计数和算术运算等操作的指令，然后利用数字式、模拟式的输入和输出接口，去控制各种机械设备或者生产过程。",
    features: [
      {
        name: "可靠性高",
        desc: "抗干扰能力强，能在复杂环境稳定工作"
      },
      {
        name: "编程简单",
        desc: "使用梯形图等易懂的编程语言"
      },
      {
        name: "体积小巧",
        desc: "结构紧凑，便于安装维护"
      },
      {
        name: "扩展灵活",
        desc: "模块化设计，易于扩展功能"
      }
    ],
    structure: "一般包括CPU（中央处理器）、存储器、输入输出单元和电源等部分"
  };

  const comparisonTable = [
    {
      aspect: "控制目标",
      dcs: {
        content: "主要应用于大规模、连续的工业生产流程",
        example: "大型炼油厂的常减压蒸馏装置，需同时监测和控制温度、压力、流量等大量模拟量参数"
      },
      plc: {
        content: "侧重于逻辑控制，适用于简单离散的自动化任务",
        example: "小型化工车间的简单反应设备，按顺序控制搅拌、加料、加热、冷却等步骤"
      }
    },
    {
      aspect: "应用领域",
      dcs: {
        content: "大型复杂装置整体控制",
        example: "化工污水处理大型系统，整合进水流量、水质成分、处理设备运行状态等多方面信息"
      },
      plc: {
        content: "小型设备或局部环节逻辑顺序控制",
        example: "废水处理设备的小型阀门组控制，实现精确开关逻辑"
      }
    },
    {
      aspect: "控制规模",
      dcs: {
        content: "能处理大量模拟量和开关量信号，覆盖整个工艺流程",
        example: "可连接众多现场传感器与执行器，对生产过程全方位监控调节"
      },
      plc: {
        content: "主要针对离散量逻辑控制，响应速度快",
        example: "适合简单顺序控制场景，确保设备按设定流程运行"
      }
    },
    {
      aspect: "系统架构",
      dcs: {
        content: "分散控制、集中管理的多级结构",
        example: "多个控制站分散布置，通过网络连接到中央控制室"
      },
      plc: {
        content: "单机或小型网络结构",
        example: "独立控制单元，可通过简单网络连接"
      }
    },
    {
      aspect: "成本投入",
      dcs: {
        content: "前期投入较高，但长期运行成本效益好",
        example: "适合大型化工装置，通过集中管理提高生产效率和安全性"
      },
      plc: {
        content: "价格相对较低，适合预算有限的项目",
        example: "适合简单的化工环节，初始投资少"
      }
    },
    {
      aspect: "维护难度",
      dcs: {
        content: "系统结构复杂，需要专业技术人员维护",
        example: "故障定位精准，可快速定位到相关模块进行维修"
      },
      plc: {
        content: "结构简单，维护相对容易",
        example: "维修成本较低，一般技术人员即可维护"
      }
    }
  ];

  const applicationScenarios = [
    {
      title: "DCS典型应用场景",
      icon: <Factory className="w-8 h-8" />,
      scenarios: [
        "石油炼化装置控制",
        "大型化工生产线",
        "电力发电厂控制",
        "造纸厂全流程控制",
        "大型污水处理系统"
      ],
      color: "from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)]"
    },
    {
      title: "PLC典型应用场景",
      icon: <Settings className="w-8 h-8" />,
      scenarios: [
        "包装机械控制",
        "输送系统控制",
        "小型批次反应控制",
        "设备启停顺序控制",
        "简单的物料配比系统"
      ],
      color: "from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)]"
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
            <GitCompare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[color:var(--text-primary)] mb-4">
            DCS与PLC的区别
          </h1>
          <p className="text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">
            深入对比DCS与PLC在控制目标、应用领域的差异，掌握在化工生产中的选型原则
          </p>
        </motion.div>

        {/* PLC定义 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-deep p-8 mb-12 border border-[color:var(--primary-teal)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-4">
            {plcDefinition.title}
          </h2>
          <p className="text-lg text-[color:var(--text-secondary)] mb-4 leading-relaxed">
            <span className="font-bold text-[color:var(--accent-orange)]">PLC：</span>
            {plcDefinition.description}
          </p>
          <p className="text-[color:var(--text-secondary)] mb-6 leading-relaxed">
            {plcDefinition.details}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {plcDefinition.features.map((feature, index) => (
              <div key={index} className="glass-light p-4">
                <h4 className="font-bold text-[color:var(--primary-teal)] mb-2">
                  {feature.name}
                </h4>
                <p className="text-sm text-[color:var(--text-secondary)]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-[color:var(--bg-medium)]/30 rounded-lg border-l-4 border-[color:var(--accent-orange)]">
            <p className="text-sm text-[color:var(--text-secondary)]">
              <span className="font-semibold text-[color:var(--accent-orange)]">PLC的结构：</span>
              {plcDefinition.structure}
            </p>
          </div>
        </motion.div>

        {/* 详细对比表 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] text-center mb-8">
            DCS与PLC详细对比
          </h2>
          
          <div className="space-y-6">
            {comparisonTable.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-effect overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] p-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {index === 0 && <TrendingUp className="w-5 h-5" />}
                    {index === 1 && <Factory className="w-5 h-5" />}
                    {index === 2 && <Network className="w-5 h-5" />}
                    {index === 3 && <Database className="w-5 h-5" />}
                    {index === 4 && <DollarSign className="w-5 h-5" />}
                    {index === 5 && <Wrench className="w-5 h-5" />}
                    {item.aspect}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[color:var(--primary-teal)]/20">
                  {/* DCS */}
                  <div className="p-6">
                    <h4 className="font-bold text-[color:var(--primary-teal)] mb-3 flex items-center gap-2">
                      <Cpu className="w-5 h-5" />
                      DCS
                    </h4>
                    <p className="text-[color:var(--text-secondary)] mb-3">
                      {item.dcs.content}
                    </p>
                    <div className="p-3 bg-[color:var(--bg-medium)]/20 rounded-lg">
                      <p className="text-sm text-[color:var(--text-muted)]">
                        <span className="font-semibold">示例：</span>
                        {item.dcs.example}
                      </p>
                    </div>
                  </div>
                  
                  {/* PLC */}
                  <div className="p-6">
                    <h4 className="font-bold text-[color:var(--accent-orange)] mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      PLC
                    </h4>
                    <p className="text-[color:var(--text-secondary)] mb-3">
                      {item.plc.content}
                    </p>
                    <div className="p-3 bg-[color:var(--bg-medium)]/20 rounded-lg">
                      <p className="text-sm text-[color:var(--text-muted)]">
                        <span className="font-semibold">示例：</span>
                        {item.plc.example}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 应用场景 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {applicationScenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="glass-deep p-6 border border-[color:var(--primary-teal)]/20"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${scenario.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                {scenario.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-4">
                {scenario.title}
              </h3>
              
              <ul className="space-y-2">
                {scenario.scenarios.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-[color:var(--primary-teal)] to-[color:var(--accent-orange)] rounded-full" />
                    <span className="text-[color:var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 选型建议 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="glass-deep p-8 border border-[color:var(--accent-orange)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-6 text-center">
            化工生产中的选型建议
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--system-green)] to-[color:var(--primary-teal)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[color:var(--text-primary)] mb-2">生产规模</h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                大规模连续生产选DCS，小批量离散生产选PLC
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[color:var(--text-primary)] mb-2">控制复杂度</h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                复杂过程控制选DCS，简单逻辑控制选PLC
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--system-blue)] to-[color:var(--primary-teal)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[color:var(--text-primary)] mb-2">投资预算</h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                预算充足且追求长期效益选DCS，预算有限选PLC
              </p>
            </div>
          </div>
        </motion.div>

        {/* 底部导航 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/course/dcs-signal-types"
            className="btn-glass rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一页：DCS信号类型</span>
          </Link>
          
          <Link
            to="/course-test"
            className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>已完成，参与课堂测试</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DCSvsPLCPage;