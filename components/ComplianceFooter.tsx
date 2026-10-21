// 网站底部备案信息：ICP备案与公安联网备案
import Image from 'next/image';

const ICP_BEIAN = '晋ICP备2023020746号-2';
const ICP_BEIAN_URL = 'https://beian.miit.gov.cn/';
const POLICE_BEIAN = '晋公网安备14010602111139号';
const POLICE_BEIAN_CODE = '14010602111139';
const POLICE_BEIAN_URL = `https://beian.mps.gov.cn/#/query/webSearch?code=${POLICE_BEIAN_CODE}`;

export default function ComplianceFooter() {
  return (
    <footer
      role="contentinfo"
      className="shrink-0 border-t border-gray-100 bg-white px-4 py-1 text-center text-[12px] leading-[20px] text-gray-500"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        <a
          href={ICP_BEIAN_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="工业和信息化部 ICP/IP地址/域名信息备案管理系统"
          className="rounded-sm transition-colors hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ongwu-primary focus-visible:ring-offset-2"
        >
          {ICP_BEIAN}
        </a>
        <span className="hidden text-gray-300 sm:inline" aria-hidden="true">|</span>
        <a
          href={POLICE_BEIAN_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="全国互联网安全管理服务平台"
          className="inline-flex items-center gap-1 rounded-sm transition-colors hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ongwu-primary focus-visible:ring-offset-2"
        >
          <Image
            src="/beian.png"
            alt="公安备案图标"
            width={20}
            height={20}
            unoptimized
            className="h-[20px] w-[20px] shrink-0"
          />
          <span>{POLICE_BEIAN}</span>
        </a>
      </div>
    </footer>
  );
}
