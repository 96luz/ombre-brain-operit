/*
METADATA
{
    "name": "ombre_brain",
    "display_name": {
        "zh": "Ombre-Brain AI记忆系统",
        "en": "Ombre-Brain AI Memory System"
    },
    "description": {
        "zh": "AI情感记忆系统。自动安装部署Ombre-Brain到Operit，提供跨对话长期记忆能力。支持hold(存储)、breath(检索)、grow(日记归档)、trace(修改)、pulse(状态)、dream(自省)。需要DeepSeek和硅基流动API key。",
        "en": "AI emotional memory system. One-click install Ombre-Brain into Operit, providing cross-conversation long-term memory. Supports hold(store), breath(retrieve), grow(diary archive), trace(modify), pulse(status), dream(introspection). Requires DeepSeek & SiliconFlow API keys."
    },
    "category": "Memory",
    "enabledByDefault": false,
    "tools": [
        {
            "name": "install",
            "description": {
                "zh": "一键安装Ombre-Brain：在proot Linux环境中克隆源码、安装依赖、创建配置、注册MCP服务。需要提供deepseek_key和siliconflow_key。",
                "en": "One-click install Ombre-Brain: clone source, install deps, create config, register MCP service in proot Linux. Requires deepseek_key and siliconflow_key."
            },
            "parameters": [
                {
                    "name": "deepseek_key",
                    "description": {"zh": "DeepSeek API key（用于记忆压缩和打标签）", "en": "DeepSeek API key (for memory compression & tagging)"},
                    "type": "string",
                    "required": true
                },
                {
                    "name": "siliconflow_key",
                    "description": {"zh": "硅基流动 API key（用于语义检索embedding）", "en": "SiliconFlow API key (for semantic search embedding)"},
                    "type": "string",
                    "required": true
                },
                {
                    "name": "buckets_dir",
                    "description": {"zh": "记忆存储目录，默认/sdcard/Memory", "en": "Memory storage directory, default /sdcard/Memory"},
                    "type": "string",
                    "required": false
                },
                {
                    "name": "port",
                    "description": {"zh": "服务端口号，默认8000", "en": "Server port, default 8000"},
                    "type": "number",
                    "required": false
                }
            ]
        },
        {
            "name": "hold",
            "description": {
                "zh": "存储单条记忆，自动打标+合并。content为记忆内容，tags逗号分隔，importance 1-10，pinned=True创建永久钉选桶，feel=True存储第一人称感受。",
                "en": "Store a memory, auto-tag & merge. content=memory text, tags=comma-separated, importance 1-10, pinned=True=permanent, feel=True=first-person feeling."
            },
            "parameters": [
                {
                    "name": "content",
                    "description": {"zh": "记忆内容", "en": "Memory content"},
                    "type": "string",
                    "required": true
                },
                {
                    "name": "tags",
                    "description": {"zh": "标签，逗号分隔", "en": "Tags, comma-separated"},
                    "type": "string",
                    "required": false
                },
                {
                    "name": "importance",
                    "description": {"zh": "重要度 1-10", "en": "Importance 1-10"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "pinned",
                    "description": {"zh": "是否永久钉选", "en": "Pin permanently"},
                    "type": "boolean",
                    "required": false
                },
                {
                    "name": "feel",
                    "description": {"zh": "是否为第一人称感受", "en": "First-person feeling mode"},
                    "type": "boolean",
                    "required": false
                },
                {
                    "name": "valence",
                    "description": {"zh": "情感效价 0-1，-1忽略", "en": "Emotional valence 0-1, -1 to ignore"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "arousal",
                    "description": {"zh": "情感唤醒度 0-1，-1忽略", "en": "Emotional arousal 0-1, -1 to ignore"},
                    "type": "number",
                    "required": false
                }
            ]
        },
        {
            "name": "breath",
            "description": {
                "zh": "检索/浮现记忆。query=关键词检索，空=自动浮现。domain逗号分隔，max_results控制返回数量(默认5，最大50)，importance_min>=1按重要度批量拉取。",
                "en": "Retrieve/surface memories. query=keyword search, empty=auto-surface. domain=comma-separated, max_results=default 5 max 50, importance_min>=1=batch by importance."
            },
            "parameters": [
                {
                    "name": "query",
                    "description": {"zh": "搜索关键词，空则自动浮现", "en": "Search keyword, empty for auto-surface"},
                    "type": "string",
                    "required": false
                },
                {
                    "name": "max_results",
                    "description": {"zh": "返回数量上限，默认5", "en": "Max results, default 5"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "max_tokens",
                    "description": {"zh": "返回总token上限，默认10000", "en": "Max total tokens, default 10000"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "domain",
                    "description": {"zh": "领域过滤，逗号分隔", "en": "Domain filter, comma-separated"},
                    "type": "string",
                    "required": false
                },
                {
                    "name": "valence",
                    "description": {"zh": "情感效价过滤 0-1", "en": "Valence filter 0-1"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "arousal",
                    "description": {"zh": "情感唤醒度过滤 0-1", "en": "Arousal filter 0-1"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "importance_min",
                    "description": {"zh": "最低重要度过滤>=1", "en": "Minimum importance filter >=1"},
                    "type": "number",
                    "required": false
                }
            ]
        },
        {
            "name": "grow",
            "description": {
                "zh": "日记归档，自动拆分为多桶。content为日记全文。",
                "en": "Diary archive, auto-split into buckets. content=full diary text."
            },
            "parameters": [
                {
                    "name": "content",
                    "description": {"zh": "日记内容", "en": "Diary content"},
                    "type": "string",
                    "required": true
                }
            ]
        },
        {
            "name": "trace",
            "description": {
                "zh": "修改记忆元数据或内容。bucket_id必填，其余只传需改的。resolved=1沉底/0激活，pinned=1钉选/0取消，digested=1隐藏/0取消，content=替换正文，delete=True删除。",
                "en": "Modify memory metadata/content. bucket_id required, rest optional. resolved=1=archive/0=active, pinned, digested, content=replace, delete=True."
            },
            "parameters": [
                {
                    "name": "bucket_id",
                    "description": {"zh": "记忆桶ID", "en": "Bucket ID"},
                    "type": "string",
                    "required": true
                },
                {
                    "name": "content",
                    "description": {"zh": "替换桶正文", "en": "Replace bucket content"},
                    "type": "string",
                    "required": false
                },
                {
                    "name": "resolved",
                    "description": {"zh": "1=沉底，0=激活", "en": "1=archive, 0=active"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "pinned",
                    "description": {"zh": "1=钉选，0=取消", "en": "1=pin, 0=unpin"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "digested",
                    "description": {"zh": "1=隐藏(不浮现)，0=取消隐藏", "en": "1=hide(no surface), 0=unhide"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "delete",
                    "description": {"zh": "True=删除此记忆桶", "en": "True=delete this bucket"},
                    "type": "boolean",
                    "required": false
                },
                {
                    "name": "importance",
                    "description": {"zh": "修改重要度1-10", "en": "Update importance 1-10"},
                    "type": "number",
                    "required": false
                },
                {
                    "name": "tags",
                    "description": {"zh": "修改标签，逗号分隔", "en": "Update tags, comma-separated"},
                    "type": "string",
                    "required": false
                }
            ]
        },
        {
            "name": "pulse",
            "description": {
                "zh": "查看系统状态和记忆桶列表。include_archive=True含归档桶。",
                "en": "View system status and bucket list. include_archive=True includes archived."
            },
            "parameters": [
                {
                    "name": "include_archive",
                    "description": {"zh": "是否包含归档桶", "en": "Include archived buckets"},
                    "type": "boolean",
                    "required": false
                }
            ]
        },
        {
            "name": "dream",
            "description": {
                "zh": "做梦——读取最近新增的记忆桶供自省。读完后可trace(resolved=1)放下或hold(feel=True)写感受。",
                "en": "Dream - read recently added buckets for introspection. After reading, trace(resolved=1) to settle or hold(feel=True) to write feelings."
            },
            "parameters": []
        },
        {
            "name": "service_status",
            "description": {
                "zh": "检查Ombre-Brain服务状态：是否已安装、进程是否运行、端口是否监听。",
                "en": "Check Ombre-Brain service status: installed, running, port listening."
            },
            "parameters": []
        },
        {
            "name": "restart_service",
            "description": {
                "zh": "重启Ombre-Brain服务（杀掉旧进程，启动新进程）。",
                "en": "Restart Ombre-Brain service (kill old process, start new)."
            },
            "parameters": []
        }
    ]
}*/

// ============================================================
// Ombre-Brain 沙盒包 for Operit
// 提供一键安装、服务管理和记忆工具
// ============================================================

const OMBRE_BRAIN = (function () {
    // ---- 配置常量 ----
    const DEFAULT_PORT = 8000;
    const DEFAULT_BUCKETS_DIR = "/sdcard/Memory";
    const OMBRE_SOURCE_DIR = "/root/Ombre-Brain";
    const OMBRE_MCP_DIR = "/root/mcp_plugins/ombre_brain";
    const MCP_CONFIG_PATH = "/sdcard/Download/Operit/mcp_plugins/mcp_config.json";
    const MCP_PLUGIN_DIR = "/sdcard/Download/Operit/mcp_plugins/ombre_brain";
    const INSTALL_LOCK = "/root/.ombre_brain_installed";

    // ---- 工具函数 ----
    function getPort() {
        const env = getEnv("OMBRE_PORT");
        return env || String(DEFAULT_PORT);
    }

    function getBaseUrl() {
        return "http://127.0.0.1:" + getPort() + "/mcp";
    }

    // ---- MCP Streamable-HTTP 通信 ----
    // Ombre-Brain 的 MCP 使用 streamable-http transport
    // 需要先用 POST /mcp 初始化 session，然后用 POST 发 JSON-RPC 请求

    async function callMcpTool(toolName, args) {
        const baseUrl = getBaseUrl();
        const client = OkHttp.newClient();

        // 先尝试直接发 JSON-RPC 请求到 /mcp
        // streamable-http 模式下，每次 POST 会创建或复用 session
        const requestId = Date.now();

        const request = {
            jsonrpc: "2.0",
            id: requestId,
            method: "tools/call",
            params: {
                name: toolName,
                arguments: args || {}
            }
        };

        try {
            const response = await client.post(baseUrl, {
                "Content-Type": "application/json",
                "Accept": "application/json, text/event-stream"
            }, JSON.stringify(request));

            if (!response.isSuccessful()) {
                return {
                    success: false,
                    message: "Ombre-Brain服务连接失败 (HTTP " + response.statusCode + ")。请确认服务是否运行，可用 service_status 检查。"
                };
            }

            const body = response.body();
            // 处理 SSE 响应或直接 JSON
            let result;
            try {
                // 尝试直接解析 JSON
                result = JSON.parse(body);
            } catch (e) {
                // 可能是 SSE 格式，尝试提取 data 行
                const lines = body.split("\n");
                for (const line of lines) {
                    if (line.startsWith("data: ")) {
                        try {
                            result = JSON.parse(line.substring(6));
                            break;
                        } catch (e2) {
                            // skip
                        }
                    }
                }
            }

            if (!result) {
                return {
                    success: false,
                    message: "无法解析Ombre-Brain响应: " + body.substring(0, 200)
                };
            }

            // 处理 JSON-RPC 响应
            if (result.error) {
                return {
                    success: false,
                    message: "Ombre-Brain错误: " + (result.error.message || JSON.stringify(result.error))
                };
            }

            // result.result 是 tools/call 的返回值
            const toolResult = result.result;
            if (toolResult && toolResult.content) {
                // MCP tool result 格式: { content: [{type: "text", text: "..."}] }
                const textContent = toolResult.content
                    .filter(c => c.type === "text")
                    .map(c => c.text)
                    .join("\n");
                return {
                    success: true,
                    message: textContent || "操作成功"
                };
            }

            return {
                success: true,
                message: toolResult ? JSON.stringify(toolResult) : "操作成功"
            };

        } catch (error) {
            return {
                success: false,
                message: "连接Ombre-Brain失败: " + error.message + "。请用 service_status 检查服务状态。"
            };
        }
    }

    // ---- 终端命令执行 ----
    const SESSION_ID = "ombre_brain_session";

    async function runCommand(cmd, timeoutMs) {
        timeoutMs = timeoutMs || 30000;
        try {
            const session = await Tools.System.terminal.create(SESSION_ID);
            const result = await Tools.System.terminal.exec(SESSION_ID, cmd, timeoutMs);
            const output = result.output || "";
            const exitCode = result.exitCode;
            return {
                success: exitCode === 0,
                output: output,
                exitCode: exitCode
            };
        } catch (e) {
            return {
                success: false,
                output: e.message || String(e),
                exitCode: -1
            };
        }
    }

    // ---- 安装逻辑 ----
    async function install(params) {
        const deepseekKey = params.deepseek_key;
        const siliconflowKey = params.siliconflow_key;
        const bucketsDir = params.buckets_dir || DEFAULT_BUCKETS_DIR;
        const port = params.port || DEFAULT_PORT;

        if (!deepseekKey || !siliconflowKey) {
            complete({
                success: false,
                message: "缺少API key。需要 deepseek_key 和 siliconflow_key 两个参数。"
            });
            return;
        }

        const steps = [];
        const log = (msg) => steps.push(msg);

        try {
            // Step 1: 安装基础工具
            log("📦 步骤1/8: 安装基础工具 (git, cmake, ninja, rust)...");
            let r = await runCommand("apt-get install -y git cmake ninja-build build-essential curl pkg-config libssl-dev libffi-dev python3-venv python3-full 2>&1 | tail -3", 120000);
            if (!r.success) {
                log("  ⚠️ apt部分失败，继续尝试...");
            }

            // Rust
            r = await runCommand("which rustc 2>/dev/null && echo 'rust exists' || (curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y 2>&1 | tail -3)", 180000);
            log("  Rust: " + (r.success ? "✅" : "⚠️ " + r.output.substring(0, 100)));

            // Step 2: 克隆源码
            log("📦 步骤2/8: 克隆 Ombre-Brain 源码...");
            r = await runCommand("test -d " + OMBRE_SOURCE_DIR + " && echo 'exists' || git clone https://github.com/P0luz/Ombre-Brain.git " + OMBRE_SOURCE_DIR + " 2>&1 | tail -3", 120000);
            log("  源码: " + (r.success ? "✅" : "⚠️ " + r.output.substring(0, 100)));

            // Step 3: 创建 venv + 安装依赖
            log("📦 步骤3/8: 创建 Python 虚拟环境...");
            r = await runCommand("cd " + OMBRE_SOURCE_DIR + " && python3 -m venv venv 2>&1", 30000);
            log("  venv: " + (r.success ? "✅" : "⚠️"));

            log("📦 步骤4/8: 配置 pip 镜像源...");
            await runCommand(OMBRE_SOURCE_DIR + "/venv/bin/pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple 2>&1", 10000);

            log("📦 步骤5/8: 注释 scikit-learn...");
            await runCommand("cd " + OMBRE_SOURCE_DIR + " && sed -i 's/^scikit-learn/#scikit-learn/' requirements.txt 2>&1", 5000);

            log("📦 步骤6/8: 安装 Python 依赖（耗时最长，约10-30分钟）...");
            r = await runCommand(". $HOME/.cargo/env && export CARGO_BUILD_JOBS=1 && export ANDROID_API_LEVEL=24 && " + OMBRE_SOURCE_DIR + "/venv/bin/pip install -r " + OMBRE_SOURCE_DIR + "/requirements.txt 2>&1 | tail -5", 600000);
            log("  依赖安装: " + (r.success ? "✅" : "⚠️ " + r.output.substring(0, 200)));

            // Step 4: 创建配置文件
            log("📦 步骤7/8: 创建配置文件...");
            const configYaml = 'transport: "streamable-http"\nlog_level: "INFO"\nbuckets_dir: "' + bucketsDir + '"\nmerge_threshold: 75\n\ndehydration:\n  model: "deepseek-chat"\n  base_url: "https://api.deepseek.com/v1"\n  max_tokens: 1024\n  temperature: 0.1\n\ndecay:\n  lambda: 0.05\n  threshold: 0.3\n  check_interval_hours: 24\n  emotion_weights:\n    base: 1.0\n    arousal_boost: 0.8\n\nembedding:\n  enabled: true\n  model: "BAAI/bge-m3"\n  base_url: "https://api.siliconflow.cn/v1"\n  api_key: "' + siliconflowKey + '"\n\nscoring_weights:\n  topic_relevance: 4.0\n  emotion_resonance: 2.0\n  time_proximity: 1.5\n  importance: 1.0\n\nmatching:\n  fuzzy_threshold: 50\n  max_results: 5\n\nwikilink:\n  enabled: true\n  use_tags: false\n  use_domain: true\n  use_auto_keywords: true\n  auto_top_k: 4\n  min_keyword_len: 3\n  exclude_keywords: []\n';

            // 用 tee 写文件避免 heredoc 问题
            r = await runCommand("cat > " + OMBRE_SOURCE_DIR + "/config.yaml << 'YAMLEOF'\n" + configYaml + "YAMLEOF\necho 'config.yaml written'", 10000);
            log("  config.yaml: " + (r.success ? "✅" : "⚠️"));

            const envContent = 'export OMBRE_API_KEY="' + deepseekKey + '"\nexport OMBRE_TRANSPORT="streamable-http"\nexport OMBRE_BUCKETS_DIR="' + bucketsDir + '"\nexport OMBRE_PORT="' + port + '"\n';
            r = await runCommand("cat > " + OMBRE_SOURCE_DIR + "/.env << 'ENVEOF'\n" + envContent + "ENVEOF\necho '.env written'", 10000);
            log("  .env: " + (r.success ? "✅" : "⚠️"));

            // 创建记忆目录
            await runCommand("mkdir -p " + bucketsDir, 5000);

            // Step 5: 部署到 MCP 目录
            log("📦 步骤8/8: 部署到 Operit MCP 插件目录...");
            // Linux 侧
            await runCommand("mkdir -p " + OMBRE_MCP_DIR + " && cp -r " + OMBRE_SOURCE_DIR + "/* " + OMBRE_MCP_DIR + "/ 2>&1 | tail -3 && cp -r " + OMBRE_SOURCE_DIR + "/venv " + OMBRE_MCP_DIR + "/ 2>&1 | tail -3", 60000);

            // 改 MCP 目录的 config.yaml 为 stdio（Operit 通过 stdio 通信）
            await runCommand("sed -i 's/transport: \"streamable-http\"/transport: \"stdio\"/' " + OMBRE_MCP_DIR + "/config.yaml 2>&1", 5000);

            // Android 侧标志文件
            await runCommand("mkdir -p " + MCP_PLUGIN_DIR + " 2>/dev/null && cp " + OMBRE_SOURCE_DIR + "/README.md " + MCP_PLUGIN_DIR + "/ 2>/dev/null && cp " + OMBRE_SOURCE_DIR + "/server.py " + MCP_PLUGIN_DIR + "/ 2>/dev/null && echo 'android side ready'", 10000);

            // 同时启动一个后台 streamable-http 服务供 HTTP 工具调用
            await runCommand("cd " + OMBRE_SOURCE_DIR + " && . venv/bin/activate && source .env && nohup python server.py > /tmp/ombre_http.log 2>&1 & sleep 3 && curl -s http://127.0.0.1:" + port + "/dashboard > /dev/null 2>&1 && echo 'http service started' || echo 'http service failed'", 30000);

            // 写安装锁
            await runCommand("echo '" + Date.now() + "' > " + INSTALL_LOCK, 5000);

            log("\n🎉 安装完成！");
            log("📌 下一步：在 Operit 设置中重启 MCP 服务，或调用 restart_service");
            log("📌 也可以通过 HTTP API 直接使用记忆工具 (hold/breath/grow 等)");

            complete({
                success: true,
                message: steps.join("\n")
            });

        } catch (error) {
            complete({
                success: false,
                message: "安装过程中出错: " + error.message + "\n已完成步骤:\n" + steps.join("\n")
            });
        }
    }

    // ---- 记忆工具（转发到 HTTP API）----
    async function hold(params) {
        const args = {};
        if (params.content) args.content = params.content;
        if (params.tags) args.tags = params.tags;
        if (params.importance) args.importance = params.importance;
        if (params.pinned) args.pinned = params.pinned;
        if (params.feel) args.feel = params.feel;
        if (params.valence !== undefined) args.valence = params.valence;
        if (params.arousal !== undefined) args.arousal = params.arousal;
        const result = await callMcpTool("hold", args);
        complete(result);
    }

    async function breath(params) {
        const args = {};
        if (params.query) args.query = params.query;
        if (params.max_results) args.max_results = params.max_results;
        if (params.max_tokens) args.max_tokens = params.max_tokens;
        if (params.domain) args.domain = params.domain;
        if (params.valence !== undefined) args.valence = params.valence;
        if (params.arousal !== undefined) args.arousal = params.arousal;
        if (params.importance_min) args.importance_min = params.importance_min;
        const result = await callMcpTool("breath", args);
        complete(result);
    }

    async function grow(params) {
        const args = { content: params.content };
        const result = await callMcpTool("grow", args);
        complete(result);
    }

    async function trace(params) {
        const args = { bucket_id: params.bucket_id };
        if (params.content) args.content = params.content;
        if (params.resolved !== undefined) args.resolved = params.resolved;
        if (params.pinned !== undefined) args.pinned = params.pinned;
        if (params.digested !== undefined) args.digested = params.digested;
        if (params.delete) args.delete = params.delete;
        if (params.importance) args.importance = params.importance;
        if (params.tags) args.tags = params.tags;
        const result = await callMcpTool("trace", args);
        complete(result);
    }

    async function pulse(params) {
        const args = {};
        if (params.include_archive) args.include_archive = params.include_archive;
        const result = await callMcpTool("pulse", args);
        complete(result);
    }

    async function dream(params) {
        const result = await callMcpTool("dream", {});
        complete(result);
    }

    // ---- 服务管理 ----
    async function serviceStatus(params) {
        const checks = [];

        // 检查安装
        const r1 = await runCommand("test -f " + INSTALL_LOCK + " && echo 'installed' || echo 'not_installed'", 5000);
        checks.push("安装状态: " + (r1.output.indexOf("installed") >= 0 ? "✅ 已安装" : "❌ 未安装"));

        // 检查源码
        const r2 = await runCommand("test -d " + OMBRE_SOURCE_DIR + " && echo 'exists' || echo 'missing'", 5000);
        checks.push("源码目录: " + (r2.output.indexOf("exists") >= 0 ? "✅" : "❌ 缺失"));

        // 检查进程
        const r3 = await runCommand("pgrep -f 'python.*server.py' 2>/dev/null && echo 'running' || echo 'stopped'", 5000);
        checks.push("进程状态: " + (r3.output.indexOf("running") >= 0 ? "✅ 运行中" : "⚠️ 未运行"));

        // 检查端口
        const port = getPort();
        const r4 = await runCommand("curl -s http://127.0.0.1:" + port + "/dashboard > /dev/null 2>&1 && echo 'listening' || echo 'not_listening'", 10000);
        checks.push("端口 " + port + ": " + (r4.output.indexOf("listening") >= 0 ? "✅ 监听中" : "⚠️ 未监听"));

        complete({
            success: true,
            message: checks.join("\n")
        });
    }

    async function restartService(params) {
        const port = getPort();
        const steps = [];

        // 杀旧进程
        let r = await runCommand("fuser -k " + port + "/tcp 2>/dev/null; pkill -f 'python.*server.py' 2>/dev/null; sleep 2; echo 'killed'", 10000);
        steps.push("旧进程清理: ✅");

        // 启动新进程
        r = await runCommand("cd " + OMBRE_SOURCE_DIR + " && . venv/bin/activate && source .env && nohup python server.py > /tmp/ombre_http.log 2>&1 & sleep 5 && curl -s http://127.0.0.1:" + port + "/dashboard > /dev/null 2>&1 && echo 'started' || echo 'failed'", 30000);
        steps.push("新服务启动: " + (r.output.indexOf("started") >= 0 ? "✅ 成功" : "❌ 失败"));

        complete({
            success: r.output.indexOf("started") >= 0,
            message: steps.join("\n")
        });
    }

    // ---- 导出 ----
    return {
        install,
        hold,
        breath,
        grow,
        trace,
        pulse,
        dream,
        service_status: serviceStatus,
        restart_service: restartService
    };
})();

// 导出工具函数
exports.install = OMBRE_BRAIN.install;
exports.hold = OMBRE_BRAIN.hold;
exports.breath = OMBRE_BRAIN.breath;
exports.grow = OMBRE_BRAIN.grow;
exports.trace = OMBRE_BRAIN.trace;
exports.pulse = OMBRE_BRAIN.pulse;
exports.dream = OMBRE_BRAIN.dream;
exports.service_status = OMBRE_BRAIN.service_status;
exports.restart_service = OMBRE_BRAIN.restart_service;
