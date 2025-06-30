import * as React from 'react';
import styles from '../TicketingDashboard.module.scss';
import {
  TicketPriority,
  TicketStatus,
  TicketCategory,
  TicketEnvironment,
  TicketSeverity,
  TicketRootCause
} from '../TicketingDashboard';
import { ITicketFormData } from '../ITicketFormData';
import { IPeoplePickerUserItem, PeoplePicker, PrincipalType } from '@pnp/spfx-controls-react/lib/PeoplePicker';
import { DateTimePicker, DateConvention } from '@pnp/spfx-controls-react/lib/DateTimePicker';
import { TextField } from '@fluentui/react/lib/TextField';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { SpinButton } from '@fluentui/react/lib/SpinButton';
import { WebPartContext } from '@microsoft/sp-webpart-base';





export interface INewTicketViewProps {
  onSubmit: (e: React.FormEvent, formData: ITicketFormData) => void;
  onCancel: () => void;
  context: WebPartContext; // SharePoint context for PeoplePicker
}

export const NewTicketView: React.FC<INewTicketViewProps> = (props): React.ReactElement => {
  const { onSubmit, context } = props;
  const peoplePickerContext = {
    absoluteUrl: context.pageContext.web.absoluteUrl,
    spHttpClient: context.spHttpClient,
    msGraphClientFactory: context.msGraphClientFactory,
  };

  // Basic fields
  const [subject, setSubject] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [priority, setPriority] = React.useState<TicketPriority>(TicketPriority.Normal);
  const [status, setStatus] = React.useState<TicketStatus>(TicketStatus.Open);
  const [assignedToId, setAssignedToId] = React.useState<string | undefined>(undefined);
  const [dueDate, setDueDate] = React.useState<Date | undefined>(undefined);

  // Additional fields
  const [category, setCategory] = React.useState<TicketCategory | undefined>(undefined);
  const [environment, setEnvironment] = React.useState<TicketEnvironment | undefined>(undefined);
  const [stepsToReproduce, setStepsToReproduce] = React.useState<string>('');
  const [expectedResult, setExpectedResult] = React.useState<string>('');
  const [actualResult, setActualResult] = React.useState<string>('');
  const [affectedVersion, setAffectedVersion] = React.useState<string>('');

  // Advanced fields - initially collapsed
  const [showAdvanced, setShowAdvanced] = React.useState<boolean>(false);
  const [severity, setSeverity] = React.useState<TicketSeverity | undefined>(undefined);
  const [rootCause, setRootCause] = React.useState<TicketRootCause | undefined>(undefined);
  const [timeSpent, setTimeSpent] = React.useState<number>(0);
  const [release, setRelease] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault(); // Prevent default form submission

    // Validate the date before submitting
    if (dueDate && isNaN(dueDate.getTime())) {
      alert("Please enter a valid date");
      return;
    }

    const formData: ITicketFormData = {
      subject,
      description,
      priority,
      status,
      assignedTo: assignedToId !== undefined ? parseInt(assignedToId.toString()) : undefined, // Convert to string to match interface
      dueDate: dueDate, // This will be properly formatted in the service
      category,
      environment,
      stepsToReproduce,
      expectedResult,
      actualResult,
      affectedVersion,
      severity,
      rootCause,
      timeSpent: timeSpent > 0 ? timeSpent : undefined,
      release: release || undefined,
      resolution: undefined,
      resolutionDate: undefined,
      regressionTestStatus: undefined,
      attachments: undefined,
    };

    onSubmit(e, formData);
  };

  // Helper function to convert enum to dropdown options
  const enumToOptions = (enumObject: Record<string, string | number>): IDropdownOption[] => {
    return Object.keys(enumObject).map(key => ({
      key: enumObject[key],
      text: enumObject[key].toString()
    }));
  };


  // PeoplePicker selection handler


  const getPeoplePickerItems = (items: IPeoplePickerUserItem[]): void => {
    if (items.length > 0 && items[0] && typeof items[0].text === 'string') {
      //const picked = items[0].props.text;      // display name
      const pickedId = items[0].id;      // numeric id
      setAssignedToId(pickedId?.toString());
    } else {
      setAssignedToId(undefined);
    }
  };


  return (
    <div id="new-ticket" className={styles.view}>
      <div className={styles.header}>
        <h1>Submit a Defect</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.ticketForm}>
        <h2>Essential Information</h2>

        <TextField
          label="Subject"
          required
          value={subject}
          onChange={(_, newValue?: string): void => setSubject(newValue || '')}
        />

        <TextField
          label="Description"
          multiline
          rows={4}
          required
          value={description}
          onChange={(_, newValue?: string): void => setDescription(newValue || '')}
        />

        <Dropdown
          label="Priority"
          required
          options={enumToOptions(TicketPriority)}
          selectedKey={priority}
          onChange={(_, option?: IDropdownOption): void =>
            option && setPriority(option.key as TicketPriority)
          }
        />

        <Dropdown
          label="Status"
          required
          options={enumToOptions(TicketStatus)}
          selectedKey={status}
          onChange={(_, option?: IDropdownOption): void =>
            option && setStatus(option.key as TicketStatus)
          }
        />

        <div className={styles.formGroup}>
          <label htmlFor="assigned-to">Assigned To</label>

          <PeoplePicker
            context={peoplePickerContext}
            personSelectionLimit={1}
            principalTypes={[PrincipalType.User]}
            resolveDelay={1000}
            onChange={getPeoplePickerItems}
            ensureUser={true}
            defaultSelectedUsers={[]}
            webAbsoluteUrl={context.pageContext.web.absoluteUrl}
          />
        </div>

        <div className={styles.formGroup}>
          <DateTimePicker
            label="Due Date"
            dateConvention={DateConvention.Date}
            value={dueDate}
            onChange={(date?: Date): void => {
              // Make sure we're working with a valid date
              if (date && !isNaN(date.getTime())) {
                setDueDate(date);
              } else {
                setDueDate(undefined);
              }
            }}
            isMonthPickerVisible={true}
            showGoToToday={true}
            formatDate={(date?: Date): string =>
              date ? date.toLocaleDateString() : ''}

          />
        </div>

        <h2>Additional Information</h2>

        <Dropdown
          label="Category"
          options={enumToOptions(TicketCategory)}
          selectedKey={category}
          onChange={(_, option?: IDropdownOption): void =>
            option && setCategory(option.key as TicketCategory)
          }
        />

        <Dropdown
          label="Environment"
          options={enumToOptions(TicketEnvironment)}
          selectedKey={environment}
          onChange={(_, option?: IDropdownOption): void =>
            option && setEnvironment(option.key as TicketEnvironment)
          }
        />

        <TextField
          label="Steps to Reproduce"
          multiline
          rows={3}
          value={stepsToReproduce}
          onChange={(_, newValue?: string): void => setStepsToReproduce(newValue || '')}
        />

        <TextField
          label="Expected Result"
          multiline
          rows={2}
          value={expectedResult}
          onChange={(_, newValue?: string): void => setExpectedResult(newValue || '')}
        />

        <TextField
          label="Actual Result"
          multiline
          rows={2}
          value={actualResult}
          onChange={(_, newValue?: string): void => setActualResult(newValue || '')}
        />

        <TextField
          label="Affected Version"
          value={affectedVersion}
          onChange={(_, newValue?: string): void => setAffectedVersion(newValue || '')}
        />

        {/* Toggle advanced fields */}
        <div className={styles.advancedToggle}>
          <button
            type="button"
            onClick={(): void => setShowAdvanced(!showAdvanced)}
            className={styles.linkButton}
          >
            {showAdvanced ? '- Hide Advanced Fields' : '+ Show Advanced Fields'}
          </button>
        </div>

        {showAdvanced && (
          <div className={styles.advancedFields}>
            <h2>Advanced Information</h2>

            <Dropdown
              label="Severity"
              options={enumToOptions(TicketSeverity)}
              selectedKey={severity}
              onChange={(_, option?: IDropdownOption): void =>
                option && setSeverity(option.key as TicketSeverity)
              }
            />

            <Dropdown
              label="Root Cause"
              options={enumToOptions(TicketRootCause)}
              selectedKey={rootCause}
              onChange={(_, option?: IDropdownOption): void =>
                option && setRootCause(option.key as TicketRootCause)
              }
            />

            <SpinButton
              label="Time Spent (Hours)"
              min={0}
              max={1000}
              step={0.5}
              value={timeSpent.toString()}
              onChange={(_, newValue?: string): void => {
                if (newValue) {
                  const parsedValue = parseFloat(newValue);
                  if (!isNaN(parsedValue)) {
                    setTimeSpent(parsedValue);
                  }
                }
              }}
            />

            <TextField
              label="Release"
              value={release}
              onChange={(_, newValue?: string): void => setRelease(newValue || '')}
            />
          </div>
        )}

        <div className={styles.formActions}>
          <button className={styles.btn} type="submit">Submit Defect</button>
          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            type="button"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};