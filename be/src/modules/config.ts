class ModuleConfig {
  /** 端口号 */
  public readonly port = 3333;
  /** 数据库配置 */
  public readonly db = {
      host: 'localhost',
      user: 'root',
      password: 'root',
      /** 数据库名 */
      database: 'test',
      /** 链接上限次数 */
      connection_limit: 10
  }
}
/** 项目配置 */
const config = new ModuleConfig();
export default config;