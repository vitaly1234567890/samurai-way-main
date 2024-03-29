import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = ({status, updateStatus}) => {

    const [editMode, setEditMode] = useState(false)
    const [statused, setStatused] = useState(status)

    useEffect(() => {
        setStatused(status)
    }, [status]);

    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactiveEditMode = () => {
        setEditMode(false)
        updateStatus(statused)
    }

    const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setStatused(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status</b>: <span onDoubleClick={activeEditMode}>{status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChanged} value={statused} autoFocus={true} onBlur={deactiveEditMode}/>
                </div>
            }
        </div>
    )
}