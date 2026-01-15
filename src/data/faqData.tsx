import React from 'react';
import { Link } from 'react-router-dom';

export interface FAQItem {
    question: string;
    category: string;
    description?: string;
    slug: string;
    answer: React.ReactNode;
}

export const faqData: FAQItem[] = [
    {
        category: 'About mortgages',
        question: "What is the difference between a flat rate and a reducing rate of interest?",
        slug: "what-is-the-difference-between-a-flat-rate-and-a-reducing-rate-of-interest",
        answer: (
            <>
                <p>Flat and reducing rates of interest are two methods of how interest can be calculated on a mortgage.</p>
                <p className="mt-4">
                    <strong>A flat rate of interest</strong> is where the rate of interest to be paid remains the same for the duration of the loan as it is always calculated against the original amount borrowed (principal).
                </p>
                <p className="mt-4">
                    <strong>A reducing rate of interest</strong> is where the amount of interest to be paid takes into consideration the repayments that have been made, so it is calculated against the remaining loan amount or outstanding balance, rather than the original principal amount.
                </p>
                <p className="mt-4">
                    On occasion, a flat rate of interest may be advertised at a lower, more appealing rate than its equivalent reducing rate. When taking a mortgage It is important to establish with the bank or your mortgage broker whether a flat or reducing rate has been applied.
                </p>
                <p className="mt-4">
                    For an in depth explanation of flat and reducing rates of interest, <a href="" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-secondary">click here</a>.
                </p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "How to calculate mortgage affordability?",
        slug: "how-is-mortgage-affordability-calculated",
        answer: (
            <>
                <p>If you’re wondering how to calculate mortgage affordability, bear in mind that most banks will calculate affordability slightly differently, but a general rule of thumb is that they will take only 50% of your monthly income into account when calculating this.</p>
                <p className="mt-4">From this 50% they will then deduct any other credit commitments you have (e.g. car loans, personal loans and approximately 5% of all your credit card limits), to work out your maximum affordability.</p>
                <p className="mt-4">They will then carry out a stress test by applying a stress rate of interest which varies between 3.5% to 8% depending on the bank. The aim of this is to confirm that you will still be able to afford your mortgage repayments if the interest rates were to increase to the test level.</p>
                <p className="mt-4">
                    <Link to="/mortgage-calculator" className="text-brand-primary underline hover:text-brand-secondary">Try our Affordability calculator</Link>
                </p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "Why do banks require a security cheque when getting a mortgage?",
        slug: "why-do-banks-require-a-security-cheque-when-getting-a-mortgage",
        answer: (
            <>
                <p>Security cheques are required by banks in the UAE as they are used in instances where the borrower fails to meet the repayments for the mortgage. Should this happen, the bank will present the cheque and when it bounces they will then be able to initiate a legal case to take possession of the property to repay the outstanding debt.</p>
                <p className="mt-4">This is not very different to other countries where the bank will have it written into their contract that they can repossess the property where the client defaults on the mortgage.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What is a security cheque?",
        slug: "what-is-a-security-cheque",
        answer: (
            <>
                <p>A security cheque is a type of guarantee required by every bank in the UAE when they give any type of credit facility including credit cards, personal or car loans or mortgages.</p>
                <p className="mt-4">The bank will require you to provide them with an undated cheque which covers the full credit amount as a minimum.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Can my housing allowance be taken into account for my mortgage?",
        slug: "can-my-housing-allowance-be-taken-into-account-for-my-mortgage",
        answer: (
            <>
                <p>Where your employer pays you a housing allowance, this can be taken into account when you are applying for a mortgage.</p>
                <p className="mt-4">For example, if you currently live in company provided accommodation and it is stipulated in your contract or salary certificate that you will be paid a housing allowance should you leave the provided accommodation, then the allowance you will be paid can be taken into account for your mortgage.</p>
                <p className="mt-4">You will still be required to have the necessary <Link to="/faq/how-much-down-payment-do-i-need-for-a-mortgage" className="text-brand-primary underline hover:text-brand-secondary">down payment</Link>, but the allowance can contribute to your affordability and therefore can, in some cases, increase the amount you are able to borrow.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Can my bonus be taken into account for my mortgage?",
        slug: "can-my-bonus-be-taken-into-account-for-my-mortgage",
        answer: (
            <>
                <p>Bonus income can be taken into account when applying for a mortgage. If it is a guaranteed bonus which is written into your contract or salary certificate then it is more likely to be accepted, but discretionary bonus can also be considered too.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What is an NOC?",
        slug: "what-is-an-noc",
        answer: (
            <>
                <p>A No Objection Certificate, commonly abbreviated to NOC, is a type of legal document issued by an organization or individual stating that there are no objections to the points made within the document.</p>
                <p className="mt-4">When purchasing property in the UAE an NOC is normally required from the developer giving clear title on the property and showing all the service changes and utilities have been paid. The NOC in this case shows that there is no objection from the developer to another person buying the property.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Is it possible to get insurance to cover my mortgage payments in the event of an accident, sickness or unemployment?",
        slug: "is-it-possible-to-get-insurance-to-cover-my-mortgage-payments-in-the-event-of-an-accident-sickness-or-unemployment",
        answer: (
            <>
                <p>It is possible to get an insurance policy to cover you in the event that you are unable to make your mortgage repayments due to accident, sickness or unemployment (this can include redundancy). This type of policy is not something you will get through your bank when taking your mortgage, instead you will need to speak to an insurance advisor to arrange this type of policy. We are able to put you in contact with insurance advisors if this is something you are interested in.</p>
                <p className="mt-4">Please note that this type of insurance is separate to the <Link to="/faq/do-i-need-life-insurance-to-get-a-mortgage-in-the-uae" className="text-brand-primary underline hover:text-brand-secondary">life insurance</Link> you are required to have in order to get a mortgage in the UAE.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "Can I get a mortgage to finance an off-plan property purchase?",
        slug: "can-i-get-a-mortgage-to-finance-an-off-plan-property-purchase",
        answer: (
            <>
                <p>Off-plan finance is available and is something we can assist with. It is important to note, however, that mortgages for off-plan purchases are often limited to projects which are being undertaken by larger, more established developers.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "Can I get a mortgage to finance my handover payment?",
        slug: "can-i-get-a-mortgage-to-finance-my-handover-payment",
        answer: (
            <>
                <p>Yes, both residents and non-residents are able to get a mortgage to finance their handover payment to the developer.</p>
                <p className="mt-4">Depending on how much has been paid prior to handover, Mortgage Finder will be able to arrange a mortgage to cover your final payment to the developer.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "Can the costs of purchasing a property be incorporated into the mortgage?",
        slug: "can-the-costs-of-purchasing-a-property-be-incorporated-into-the-mortgage",
        answer: (
            <>
                <p>Some banks will allow an element of the costs for purchasing a property to be added into the mortgage which helps save greatly on the upfront costs. Our mortgage brokers will be able to advise more on this.</p>
                <p className="mt-4">You can find out about the costs of purchasing a property and the fees you may be required to pay as part of the process <Link to="/faq/what-are-the-costs-of-purchasing-a-property-in-the-uae" className="text-brand-primary underline hover:text-brand-secondary">here</Link>.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Can I release equity from my property as a non-resident?",
        slug: "can-i-release-equity-from-my-property-as-a-non-resident",
        answer: (
            <>
                <p>Yes, generally it is quite easy to release equity (or cash) from your property as a non-resident. Similar to a non-resident mortgage, minimal documentation is required for this process and you can release up to 55% of the property value which can be used for other purposes.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "Can I take a mortgage to make a final payment to the developer where I have purchased directly from them?",
        slug: "can-i-take-a-mortgage-to-make-a-final-payment-to-the-developer",
        answer: (
            <>
                <p>Yes, mortgages are available for final payments to the developer. Any payments that have already been made to the developer would be considered part of the down payment.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "Do banks charge buildings insurance?",
        slug: "do-banks-charge-buildings-insurance",
        answer: (
            <>
                <p>Banks do charge buildings insurance. This can vary but in most cases this is on the bank’s in-house policy and equates to around 0.05% of the property value, generally charged on an annual basis.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "Are there any penalties for settling my mortgage early?",
        slug: "are-there-any-penalties-for-settling-my-mortgage-early",
        answer: (
            <>
                <p>In general most banks will charge a penalty for settling the mortgage early, but this will vary from one back to another.</p>
                <p className="mt-4">In most cases the penalty will range from 0% – 3% of the outstanding mortgage balance but this will depend on whether the mortgage is being repaid by your own funds, being sold or being refinanced by another bank.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "Can I make overpayments on my mortgage?",
        slug: "can-i-make-overpayments-on-my-mortgage",
        answer: (
            <>
                <p>Whether you can make overpayments on your mortgage in the UAE depends on the bank that you have taken the home loan with.</p>
                <p className="mt-4">Generally, most banks have an allowance to make penalty-free overpayments of up to 50% of the outstanding balance as soon as you take the mortgage. If you are on a fixed rate mortgage, in some cases the bank will only allow overpayments after the fixed rate period has ended.</p>
                <p className="mt-4">You mortgage broker will be able to provide more advice on this.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What is a title deed?",
        slug: "what-is-a-title-deed",
        answer: (
            <>
                <p>A title deed is the document registered at the Land Department which shows ownership of a plot of land. If you have purchased the property with a mortgage then your name will be included on the deed as owning that property. The original title deed is kept with the bank as security until the mortgage has been fully repaid.</p>
            </>
        )
    },
    {
        category: 'Property types',
        question: "What is the difference between freehold and leasehold property?",
        slug: "what-is-the-difference-between-freehold-and-leasehold-property",
        answer: (
            <>
                <p>Freehold is where you purchase the property in full (whether utilising a mortgage or in cash), so you own the property itself and the land that it is on. Leasehold is where you purchase the rights for the property for a limited period of time, normally for about 99 years.</p>
                <p className="mt-4">Leasehold property is uncommon in Dubai and the UAE, but there are a few areas where you can purchase leasehold property for example Silicon Oasis and Green Community.</p>
            </>
        )
    },
    {
        category: 'Property types',
        question: "Can I buy a plot of land with a mortgage to build a property on?",
        slug: "can-i-buy-a-plot-of-land-with-a-mortgage",
        answer: (
            <>
                <p>Land financing is available and it can be provided to assist with both the purchase of the plot and construction on the land.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "What is the difference between an Islamic and conventional mortgage?",
        slug: "what-is-the-difference-between-an-islamic-and-conventional-mortgage",
        answer: (
            <>
                <p>A conventional mortgage is where your loan repayments will include paying a rate of interest to the bank, this is their profit for lending you the funds.</p>
                <p className="mt-4">An Islamic mortgage differs from a conventional mortgage because under Shariah Law it is forbidden to charge interest on a loan, so in this case banks will buy the property on your behalf and rent or lease it back to you for a profit.</p>
                <p className="mt-4">You can read more about the difference between conventional and Islamic mortgages in our blog <a href="" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-secondary">here</a>.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "What is EIBOR and how can I check these rates?",
        slug: "what-is-eibor-and-how-can-i-check-these-rates",
        answer: (
            <>
                <p>EIBOR is the Emirates Interbank Offered Rate, which is the rate at which banks lend to each other. EIBOR rates change daily and can be checked on the Central Bank website <a href="" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-secondary">here</a>.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "What is a reversion rate?",
        slug: "what-is-a-reversion-rate",
        answer: (
            <>
                <p>A reversion rate is the interest rate that your mortgage ‘reverts’ to after your fixed rate mortgage period comes to an end. The reversion rate, similarly to a variable mortgage rate, is normally linked to an EIBOR rate with a percentage added by the bank.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "What is the difference between a fixed rate and a variable rate?",
        slug: "difference-between-fixed-rate-and-variable-rate",
        answer: (
            <>
                <p>A fixed rate mortgage is where the rate of interest you pay on your mortgage is kept the same (fixed) for a certain period of time, which is generally between 1-5 years. Once the fixed rate period has ended, in most cases you are then moved onto a <Link to="/faq/what-is-a-reversion-rate" className="text-brand-primary underline hover:text-brand-secondary">reversion rate</Link>.</p>
                <p className="mt-4">Variable rate mortgages are when the rate of interest you pay is linked to 1, 3, or 6 month <Link to="/faq/what-is-eibor-and-how-can-i-check-these-rates" className="text-brand-primary underline hover:text-brand-secondary">EIBOR</Link> with a fixed percentage added by the bank. This means the rate you pay can go up or down over time, depending on EIBOR. For example, if in month 1 EIBOR is 2.5% and the fixed margin your bank applies is 1.49%, then the variable rate you will pay is 3.99%. If in month 6 EIBOR has increased to 3.5% then your variable rate will change to 4.99%.</p>
                <p className="mt-4">You can read more about the difference between fixed rate and variable rate mortgages, as well as the advantages and disadvantages of each in our blog article <a href="" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-secondary">here</a>.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Can I buy a property with my spouse?",
        slug: "can-i-buy-a-property-with-my-spouse",
        answer: (
            <>
                <p>Yes, a husband and wife can be joint applicants on a property, even if one of the applicants is not working. As long as the applicant can demonstrate that the have the ability to repay the home loan.</p>
                <p className="mt-4">You can learn more about purchasing with your spouse in our <a href="" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-secondary">blog here</a>.</p>
            </>
        )
    },
    {
        category: 'Property types',
        question: "What types of property can I get a mortgage on?",
        slug: "what-types-of-property-can-i-get-a-mortgage-on",
        answer: (
            <>
                <p>All types of property, whether freehold, leasehold, land, construction and commercial properties</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Do I need life insurance to get a mortgage in the UAE?",
        slug: "do-i-need-life-insurance-to-get-a-mortgage-in-the-uae",
        answer: (
            <>
                <p>Yes. Life insurance is mandatory for any mortgage in the UAE. In most cases the bank lending you the funds for your property purchase will require that you take their in-house life insurance policy in order to get the mortgage. However, we have a number of exclusive deals with banks where we can assign an external life insurance policy which can save you about 50% on the bank’s in-house life insurance policy.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What is an MOU and why do I need this?",
        slug: "what-is-an-mou-and-why-do-i-need-this",
        answer: (
            <>
                <p>An MOU is a Memorandum of Understanding and is part of the purchasing process. It is an agreement put together by the real estate agent, signed by you and the seller, outlining the timescales and terms and conditions of the property purchase. We will always check the MOU on your behalf before you sign it.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "I am self-employed. Can I get a mortgage?",
        slug: "i-am-self-employed-can-i-get-a-mortgage",
        answer: (
            <>
                <p>Yes, absolutely! Banks have different preferences when it comes to employed and self-employed applications. We have a lot of experience working with self-employed clients and we are very familiar with the banks that look favourably on these applicants.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What is the first step to getting a mortgage in the UAE?",
        slug: "what-is-the-first-step-to-getting-a-mortgage-in-the-uae",
        answer: (
            <>
                <p>Speaking to one of our mortgage brokers who will be able to assess your borrowing capacity and take you through the pre-approval process.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "How long does it take to get a mortgage?",
        slug: "how-long-does-it-take-to-get-a-mortgage",
        answer: (
            <>
                <p>The mortgage pre-approval process is the first step in getting a mortgage and can take up to 5 working days. However, it is worth noting that securing pre-approval may take longer depending on the bank used and the complexity of your case.</p>
                <p className="mt-4">Once pre-approval has been secured and you have settled on a property that you want to purchase, we manage the rest of the process on your behalf until completion.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What is the process to get a mortgage in the UAE?",
        slug: "what-is-the-process-to-get-a-mortgage-in-the-uae",
        answer: (
            <>
                <p>We would advise that the first step to getting a mortgage in the UAE would be to speak to one of our mortgage brokers.</p>
                <p className="mt-4">We will have an initial consultation with you to assess your situation and your borrowing capacity. Based on this consultation, we will then be able to provide you with recommendations on the best mortgage products for you and take you through the mortgage pre-approval process.</p>
                <p className="mt-4">Once you have found a property you would like to purchase and you have finalised this, we will then work with the bank on your behalf to get the mortgage setup in a timely manner and manage the complete process until you take ownership of the property.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "What are the age limits for getting a mortgage?",
        slug: "what-are-the-age-limits-for-getting-a-mortgage",
        answer: (
            <>
                <p>The minimum age limit is generally 21 and the maximum term is up to age 65 for employed expats or 70 for UAE nationals and self-employed expats.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Do you perform credit checks for a mortgage in the UAE?",
        slug: "do-you-perform-credit-checks-for-a-mortgage-in-the-uae",
        answer: (
            <>
                <p>Yes, all banks will perform a credit check on you before approving a mortgage. The credit bureau is called <a href="" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-secondary">Al Etihad Credit Bureau</a> and you can obtain your own credit report by downloading the app and paying a small fee.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What documents do I need to get a mortgage?",
        slug: "what-documents-do-i-need-to-get-a-mortgage",
        answer: (
            <>
                <p>Documents required can differ depending on your circumstances, but our mortgage brokers will be able to discuss this with you.</p>
                <p className="mt-4">In general, we will require the following documents for your mortgage:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Copy of your passport</li>
                    <li>Visa</li>
                    <li>Emirates ID</li>
                    <li>Salary certificate addressed to ‘Mortgage Finder’</li>
                    <li>Last six months payslips and bank statements</li>
                    <li>Proof of your current address – copy of DEWA bill or tenancy agreement.</li>
                </ul>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Can my parents or family members help me get a mortgage?",
        slug: "can-my-parents-or-family-members-help-me-get-a-mortgage",
        answer: (
            <>
                <p>Of course, parents and other family members are allowed to assist with down payment by gifting or lending you the money for this</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "Can I take a personal loan for the down payment?",
        slug: "can-i-take-a-personal-loan-for-the-down-payment",
        answer: (
            <>
                <p>By Central Bank regulations, you are not allowed to take a personal loan for the down payment. A personal loan to cover the associated fees is allowed though.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What if my down payment is too small?",
        slug: "what-if-my-down-payment-is-too-small",
        answer: (
            <>
                <p>If your down payment is too small, it may be worth considering liquidising any investments, borrowing from family or you can look at a smaller property.</p>
                <p className="mt-4">Check out our blog post <a href="" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-secondary">here</a> on this topic.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "How much down payment do I need for a mortgage?",
        slug: "how-much-down-payment-do-i-need-for-a-mortgage",
        answer: (
            <>
                <p>The minimum down payment for a property under AED 5million is 20% for an expat or 15% for a UAE national. The minimum down payment for a property over AED 5million is 30% for an expat or 25% for a UAE national.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "How much can I borrow?",
        slug: "how-much-can-i-borrow",
        answer: (
            <>
                <p>The amount that you can borrow depends mainly on your income and liabilities. You can use the Mortgage Finder <Link to="/mortgage-calculator" className="text-brand-primary underline hover:text-brand-secondary">Affordability Calculator</Link> to work this out.</p>
                <p className="mt-4">For a property purchase price under AED 5million the maximum loan-to-value (LTV) for an expat is 80% and for a UAE national is 85%. For properties over AED 5million, this decreases to 70% LTV for expats and to 75% for UAE nationals.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Can Non residents get a mortgage?",
        slug: "can-non-residents-get-a-mortgage-in-the-uae",
        answer: (
            <>
                <p>Yes, the process is relatively easy for a non-resident to get a mortgage in the UAE. If you are a non-resident wanting to get a mortgage in Dubai, Abu Dhabi or another Emirate we will require six months bank statements which demonstrate affordability, proof of income and a copy of your passport.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "Can expats get a mortgage in the UAE?",
        slug: "can-expats-get-a-mortgage-in-the-uae",
        answer: (
            <>
                <p>Yes, absolutely! For your first purchase, you are able to borrow up to 75% of the property value where the property is below AED 5million. If the property is over AED 5million, as an expat you can borrow up to 65% of the property value.</p>
            </>
        )
    },
    {
        category: 'About applicants',
        question: "What are the requirements to get a mortgage in the UAE?",
        slug: "what-are-the-requirements-to-get-a-mortgage-in-the-uae",
        answer: (
            <>
                <p>Nearly everyone can get a mortgage within the UAE as long as you can demonstrate your income. Income can be from a variety of sources including salary, commission and rental income. Contact one of our mortgage brokers to discuss your specific situation.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "What are the typical mortgage rates in the UAE?",
        slug: "what-are-the-typical-mortgage-rates-in-the-uae",
        answer: (
            <>
                <p>Mortgage rates can change on a monthly basis, currently rates can start from around 2.99% to 4.99%, depending on the lender and the product type.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What are the costs of purchasing a property in the UAE?",
        slug: "what-are-the-costs-of-purchasing-a-property-in-the-uae",
        answer: (
            <>
                <p>There are certain costs that you will need to pay when purchasing a property in the UAE, these can differ slightly depending on whether you are in Dubai, Abu Dhabi or another Emirate.</p>
                <p className="mt-4">It is possible to incorporate some of these fees into the mortgage, read more <Link to="/faq/can-the-costs-of-purchasing-a-property-be-incorporated-into-the-mortgage" className="text-brand-primary underline hover:text-brand-secondary">here</Link>.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What fees do I need to pay when getting a mortgage?",
        slug: "what-fees-do-i-need-to-pay-when-getting-a-mortgage",
        answer: (
            <>
                <p>The fees in specific relation to a mortgage would be a bank valuation fee and a bank arrangement fee. The bank valuation fee can range from AED 2000 – 5000 and the bank arrangement fee can between 0% to 1.5%, both fees vary depending on the bank.</p>
                <p className="mt-4">In Dubai, you will also be required to pay a mortgage registration fee of 0.25% plus a AED 290, which is payable to the Dubai Land Department.</p>
            </>
        )
    },
    {
        category: 'Mortgage brokers',
        question: "Should I go to my bank directly for a mortgage?",
        slug: "should-i-go-to-my-bank-directly-for-a-mortgage",
        answer: (
            <>
                <p>We would say no, but let us explain why.</p>
                <p className="mt-4">When approaching a bank directly they will not necessarily have the best mortgage offer for your situation and they will be focused on showing you the benefits of their product.</p>
                <p className="mt-4">If you consult a mortgage broker, like Mortgage Finder, our team are able to look at mortgage products across the UAE from different banks to offer you the best one for your situation and also share the pros and cons of them with you, so you can make an informed decision.</p>
            </>
        )
    },
    {
        category: 'Mortgage brokers',
        question: "Why should I use a mortgage broker?",
        slug: "why-should-i-use-a-mortgage-broker",
        answer: (
            <>
                <p>The benefit of using one of our mortgage brokers is that we are able to offer unbiased expert advice to help you find the best mortgage product for your situation. We will discuss all the available options with you and offer you our opinion on the best one for you, so that you can make an informed decision.</p>
                <p className="mt-4">Our mortgage consultants will guide you through the property purchasing process in the UAE and will make getting a mortgage easy.</p>
                <p className="mt-4">We also have access to exclusive mortgage products which are not available when you go to the banks directly.</p>
            </>
        )
    },
    {
        category: 'Mortgage brokers',
        question: "What is a mortgage broker?",
        slug: "what-is-a-mortgage-broker",
        answer: (
            <>
                <p>A mortgage broker, otherwise known as a mortgage consultant, is an independent advisor who is able to arrange a loan between you and a bank to fund your property purchase.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "How does salary transfer or non-salary transfer impact my mortgage repayments?",
        slug: "how-does-salary-transfer-impact-my-mortgage-repayments",
        answer: (
            <>
                <p>A salary transfer means your employer will give an undertaking to the bank that if you were to leave employment for whatever reason (e.g. if you lost your job, moved to another job or even moved outside of the UAE), that any end-of-service gratuity would go to the bank where the salary transfer is being made.</p>
                <p className="mt-4">Some banks will give a slightly preferential rate if you undertake a salary transfer to them. Whether these rates are worthwhile is dependent on your situation and our team of expert mortgage brokers will be better able to advise you on this.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "Can I leave the UAE if I have a mortgage?",
        slug: "can-i-leave-the-uae-if-i-have-a-mortgage",
        answer: (
            <>
                <p>Yes. When you leave the UAE you can keep the property as a buy-to-let. Most of the banks are mainly concerned with you keeping up your mortgage repayments and not falling into arrears.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "Why should I get pre-approved for a mortgage before looking for a property?",
        slug: "why-should-i-get-pre-approved-for-a-mortgage-before-looking-for-a-property",
        answer: (
            <>
                <p>The main reason you should get pre-approved is that banks tend to have different appetites for the types of clients they will lend to based on profiles. As a buyer, pre-approval gives you comfort to know that you can look at properties and once you have found the property you want to purchase you will be able to move forward quickly with your bank of choice.</p>
                <p className="mt-4">Pre-approval also shows prospective sellers that you are a serious buyer and you are not just window-shopping, this can put you in a more favourable position and assist in negotiations to get a better price.</p>
            </>
        )
    },
    {
        category: 'Buying process',
        question: "What is mortgage pre-approval?",
        slug: "what-is-mortgage-pre-approval",
        answer: (
            <>
                <p>Mortgage pre-approval is the first step in the mortgage process for buying a property.</p>
                <p className="mt-4">It is when the bank reviews your application and issues a letter or email which will state that they have pre-approved you and will lend you the amount requested. This is generally valid for 60 days. This provides comfort that the mortgage approval has been secured on certain terms from the bank and confidence to negotiate on properties safe in the knowledge that matters can be concluded quickly.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "How do I choose the best mortgage products?",
        slug: "how-do-i-choose-the-best-mortgage-products",
        answer: (
            <>
                <p>It is important that you select a mortgage product which best suits your situation rather than simply going with the product offered by your own bank, as this may not necessarily be the best option for you.</p>
                <p className="mt-4">We would always recommend that you speak with an expert mortgage consultancy, like Mortgage Finder, as we have full access to the mortgage products available in the market and we have access to <Link to="/faq/what-are-exclusive-mortgage-products" className="text-brand-primary underline hover:text-brand-secondary">exclusive products</Link> too.</p>
                <p className="mt-4">A mortgage broker will provide you with unbiased advice and assist you in understanding the full product range that banks are offering. They will share the pros and cons of the various options available and offer their opinion on the best one depending on your situation, so that you can make an informed and educated decision.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "What are exclusive mortgage products?",
        slug: "what-are-exclusive-mortgage-products",
        answer: (
            <>
                <p>Exclusive mortgage products are offers that we get directly from the banks which they will not necessarily offer if you approach them yourself for a mortgage.</p>
                <p className="mt-4">The reason some banks are able to offer us exclusive mortgage products is because we work to develop good relationships with them and they realise the benefit of going through a mortgage broker for both you, the end user, and them as the lender.</p>
                <p className="mt-4">Examples of the types of offers we might receive from a banking partner include: discounted interest rates, free arrangement and processing fees, lower reversion margins, no requirement for salary transfer and the ability to assign an external life insurance policy. We are then able to forward these exclusive offers on to our clients, depending on which is most suitable for their situation.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "What type of mortgage products are available in the UAE?",
        slug: "what-type-of-mortgage-products-are-available-in-the-uae",
        answer: (
            <>
                <p>In the UAE there are many types of mortgage products available, below are some of the main types:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Residential mortgages</li>
                    <li>Investment mortgages</li>
                    <li>Non-resident mortgages</li>
                    <li>Commercial mortgages</li>
                    <li>Rent only mortgages</li>
                    <li>Fixed and floating rate mortgages</li>
                    <li>Offset mortgages</li>
                    <li>Capital and interest/profit mortgages</li>
                    <li>Interest only mortgages</li>
                    <li>Fixed payment mortgages</li>
                    <li>Land and construction mortgages</li>
                </ul>
                <p className="mt-4">All of these are available as conventional or Islamic finance.</p>
                <p className="mt-4">You can read about the difference between Islamic finance and conventional finance <a href="" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-secondary">here</a>.</p>
            </>
        )
    },
    {
        category: 'About mortgages',
        question: "What is a mortgage?",
        slug: "what-is-a-mortgage",
        answer: (
            <>
                <p>A mortgage is a loan given to enable you to purchase a property for residential, investment or commercial purposes. The loan is secured by the lender against the property you purchase. A mortgage is repaid in monthly installments to the lender, which normally includes a rate of interest/profit and an amount towards the original amount borrowed.</p>
            </>
        )
    },
];
